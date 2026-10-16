/* =========================================================
   全站脚本  main.js
   ---------------------------------------------------------
   负责网页上的“动态”功能：
     1. 手机端汉堡菜单的展开 / 收起
     2. 页脚自动显示当前年份
     3. 首页：显示推荐产品
     4. 产品列表页：显示全部产品 + 分类筛选
     5. 产品详情页：根据网址里的 id 显示对应产品
     6. 联系页：询盘表单的校验与提交
   每个功能都会先检查当前页面有没有对应的元素，没有就跳过，
   所以所有页面都可以放心引用这同一个文件。
   ========================================================= */

/* ---------------------------------------------------------
   ★ 询盘表单的提交地址（重要）
   静态网站本身不能发邮件，需要借助第三方表单服务。
   推荐使用 Formspree（https://formspree.io，有免费套餐）：
     1. 注册账号并新建一个表单
     2. 复制得到的地址，形如 https://formspree.io/f/abcdwxyz
     3. 粘贴到下面的引号里
   留空时为“演示模式”：表单会显示提交成功，但不会真正发送。
   --------------------------------------------------------- */
const FORM_ENDPOINT = "";

// 等网页内容加载完成后再执行，避免找不到元素
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  setFooterYear();
  renderFeaturedProducts();
  renderProductList();
  renderProductDetail();
  initInquiryForm();
});

/* ---------- 1. 手机端汉堡菜单 ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    // toggle 会在“有/没有 open 类”之间切换
    const isOpen = nav.classList.toggle("open");
    // 告诉读屏软件菜单当前是否展开（无障碍）
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/* ---------- 2. 页脚年份 ---------- */
function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- 3. 首页推荐产品 ---------- */
function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;

  // 只挑出 featured 为 true 的产品
  const featured = PRODUCTS.filter(p => p.featured);
  container.innerHTML = featured.map(createProductCard).join("");
}

/* ---------- 4. 产品列表页 + 分类筛选 ---------- */
function renderProductList() {
  const container = document.getElementById("product-list");
  const filterBar = document.getElementById("filter-bar");
  if (!container || !filterBar) return;

  // 生成筛选按钮：第一个是 “All”，后面是各个分类
  const allCategories = ["All"].concat(CATEGORIES);
  filterBar.innerHTML = allCategories
    .map(cat => `<button type="button" class="filter-btn" data-category="${cat}">${cat}</button>`)
    .join("");

  // 根据分类显示产品
  function showCategory(category) {
    const list = category === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
    container.innerHTML = list.length
      ? list.map(createProductCard).join("")
      : "<p>No products in this category yet.</p>";

    // 高亮当前选中的按钮
    filterBar.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });
  }

  // 点击按钮时切换分类
  filterBar.addEventListener("click", function (event) {
    const btn = event.target.closest(".filter-btn");
    if (btn) showCategory(btn.dataset.category);
  });

  // 支持通过网址直接打开某个分类，例如 products.html?category=Grease
  const params = new URLSearchParams(window.location.search);
  const initial = params.get("category");
  showCategory(CATEGORIES.includes(initial) ? initial : "All");
}

/* ---------- 5. 产品详情页 ---------- */
function renderProductDetail() {
  const container = document.getElementById("product-detail");
  if (!container) return;

  // 从网址中读取产品编号，例如 product.html?id=nx-ultra-5w30
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS.find(p => p.id === id);

  // 找不到产品时，显示提示并引导回产品列表
  if (!product) {
    document.getElementById("detail-title").textContent = "Product Not Found";
    container.innerHTML = `
      <div class="container" style="text-align:center">
        <p style="margin-bottom:20px">Sorry, the product you are looking for does not exist.</p>
        <a class="btn btn-dark" href="products.html">Back to Products</a>
      </div>`;
    return;
  }

  // 修改浏览器标签页标题和横幅标题
  document.title = `${product.name} | NORVEX Lubricants`;
  document.getElementById("detail-title").textContent = product.name;
  document.getElementById("detail-breadcrumb-name").textContent = product.name;

  // 把数组转换成列表 HTML
  const toList = arr => arr.map(item => `<li>${item}</li>`).join("");
  const tagsHTML = product.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  const specRows = product.specs
    .map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`)
    .join("");
  // “询价”按钮会把产品名带到联系页，自动填进留言框
  const inquiryURL = `contact.html?product=${encodeURIComponent(product.name)}#inquiry`;

  // 同分类的其他产品，作为“相关产品”推荐（最多 3 个）
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const relatedHTML = related.length
    ? `<section class="section section-soft">
         <div class="container">
           <div class="section-title"><h2>Related Products</h2></div>
           <div class="grid grid-3">${related.map(createProductCard).join("")}</div>
         </div>
       </section>`
    : "";

  container.innerHTML = `
    <section class="section">
      <div class="container detail-top">
        <div class="detail-image">${createBottleSVG(product.color, product.tags[0])}</div>
        <div class="detail-info">
          <div class="product-category">${product.category}</div>
          <h1>${product.name}</h1>
          <div class="tags">${tagsHTML}</div>
          <p class="lead">${product.description}</p>

          <h3>Key Features</h3>
          <ul class="check-list">${toList(product.features)}</ul>

          <h3>Available Packaging</h3>
          <div class="tags">${product.packaging.map(p => `<span class="tag">${p}</span>`).join("")}</div>

          <div class="detail-actions">
            <a class="btn btn-primary" href="${inquiryURL}">Get a Quote</a>
            <a class="btn btn-dark" href="products.html">All Products</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container detail-columns">
        <div>
          <h2>Typical Properties</h2>
          <div class="table-wrap">
            <table class="spec-table">
              <thead><tr><th>Property</th><th>Test Method</th><th>Typical Value</th></tr></thead>
              <tbody>${specRows}</tbody>
            </table>
          </div>
          <p style="font-size:13px;color:#5f6b7a;margin-top:10px">
            Typical values are for reference only and may vary slightly between production batches.
          </p>
        </div>
        <div>
          <h2>Applications</h2>
          <ul class="check-list">${toList(product.applications)}</ul>
          <h2 style="margin-top:28px">OEM & Private Label</h2>
          <p style="color:#5f6b7a">
            This product is available for OEM and private label orders with custom bottle design,
            labeling and packaging. MOQ and lead time on request.
          </p>
        </div>
      </div>
    </section>

    ${relatedHTML}`;
}

/* ---------- 6. 询盘表单 ---------- */
function initInquiryForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  const message = document.getElementById("form-message");
  const submitBtn = form.querySelector("button[type=submit]");

  // 如果是从产品详情页点“询价”过来的，自动在留言框里填上产品名
  const params = new URLSearchParams(window.location.search);
  const productName = params.get("product");
  if (productName) {
    form.elements.message.value =
      `Hello, I am interested in "${productName}". Please send me your best price, MOQ and delivery time.`;
  }

  // 校验规则：返回错误提示文字；返回空字符串表示通过
  const rules = {
    name: v => (v.trim() ? "" : "Please enter your name."),
    company: () => "", // 公司名选填
    email: v => {
      if (!v.trim()) return "Please enter your email.";
      // 简单的邮箱格式检查：xxx@xxx.xxx
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address.";
    },
    whatsapp: v => {
      if (!v.trim()) return ""; // WhatsApp 选填
      // 允许数字、空格、加号、短横线和括号，且至少 6 位数字
      const digits = v.replace(/\D/g, "");
      return /^[\d\s+\-()]+$/.test(v) && digits.length >= 6 ? "" : "Please enter a valid phone number.";
    },
    message: v => (v.trim().length >= 10 ? "" : "Please enter at least 10 characters.")
  };

  // 校验单个字段，并显示 / 隐藏错误提示
  function validateField(name) {
    const field = form.elements[name];
    const group = field.closest(".form-group");
    const error = rules[name](field.value);
    group.classList.toggle("has-error", Boolean(error));
    group.querySelector(".error-text").textContent = error;
    return !error;
  }

  // 即时校验：
  //   - 输入时：如果该字段已经标红，边输入边重新检查，改对了错误提示马上消失
  //   - 离开输入框时：只检查已填写内容的字段（空字段等到点“提交”时再提示，
  //     避免错误提示突然出现把按钮挤走，导致点击落空）
  Object.keys(rules).forEach(name => {
    const field = form.elements[name];
    field.addEventListener("input", () => {
      if (field.closest(".form-group").classList.contains("has-error")) validateField(name);
    });
    field.addEventListener("blur", () => {
      if (field.value.trim()) validateField(name);
    });
  });

  // 显示提交结果提示
  function showMessage(type, text) {
    message.className = "form-message " + type;
    message.textContent = text;
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // 阻止浏览器默认的跳转提交

    // 校验所有字段（用 map 而不是 every，确保每个字段的错误都会显示出来）
    const allValid = Object.keys(rules).map(validateField).every(Boolean);
    if (!allValid) {
      showMessage("error", "Please correct the highlighted fields and try again.");
      return;
    }

    // 防垃圾信息：隐藏字段被填写说明是机器人，直接假装成功
    if (form.elements._gotcha && form.elements._gotcha.value) {
      showMessage("success", "Thank you! Your inquiry has been sent.");
      form.reset();
      return;
    }

    // 演示模式：没有配置提交地址
    if (!FORM_ENDPOINT) {
      console.log("【演示模式】表单数据：", Object.fromEntries(new FormData(form)));
      showMessage("success", "Thank you! Your inquiry has been received. Our sales team will reply within 24 hours. (Demo mode: no email was actually sent.)");
      form.reset();
      return;
    }

    // 真实提交：发送到第三方表单服务
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Request failed");
      showMessage("success", "Thank you! Your inquiry has been sent. Our sales team will reply within 24 hours.");
      form.reset();
    } catch (err) {
      showMessage("error", "Sorry, something went wrong. Please try again or email us directly at sales@norvex-lube.example.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Inquiry";
    }
  });
}
