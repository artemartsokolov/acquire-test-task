import './style.css';

// ================================================================
// MOCK DATA
// ================================================================

const TRANSACTIONS = [
  {
    id: 'txn_1RjKz2Q4f8mN7vBw', amount: 11245000, currency: 'EUR', status: 'succeeded',
    description: 'Payment for Order #10482', card_brand: 'Visa', card_last4: '4242',
    card_exp: '12/27', card_country: 'DE', customer_email: 'max.mueller@example.com',
    customer_name: 'Max Müller', merchant: 'TechStore GmbH', merchant_id: 'merch_8x9Kp2',
    created: '2026-03-31T06:42:18Z', risk_score: 12, risk_level: 'low',
    auth_code: 'A08291', arn: '74927839100029384756001', fee: 5000, net: 11240000,
    timeline: [
      { event: 'Payment created', time: '2026-03-31T06:42:18Z', status: 'info' },
      { event: '3D Secure authentication passed', time: '2026-03-31T06:42:21Z', status: 'success' },
      { event: 'Authorization approved by issuer', time: '2026-03-31T06:42:22Z', status: 'success' },
      { event: 'Payment captured', time: '2026-03-31T06:42:22Z', status: 'success' },
    ],
    metadata: { order_id: '10482', customer_tier: 'premium', shipping: 'express' },
  },
  {
    id: 'txn_9PmLa5R7gNk3xYdE', amount: 8950, currency: 'EUR', status: 'succeeded',
    description: 'Subscription renewal — Pro Plan', card_brand: 'Mastercard', card_last4: '5556',
    card_exp: '03/28', card_country: 'FR', customer_email: 'claire.dupont@example.com',
    customer_name: 'Claire Dupont', merchant: 'SaaSify Inc.', merchant_id: 'merch_3v7Yq1',
    created: '2026-03-31T06:38:05Z', risk_score: 8, risk_level: 'low',
    auth_code: 'B41723', arn: '51938274610048291735002', fee: 26, net: 8924,
    timeline: [
      { event: 'Payment created', time: '2026-03-31T06:38:05Z', status: 'info' },
      { event: 'Authorization approved by issuer', time: '2026-03-31T06:38:06Z', status: 'success' },
      { event: 'Payment captured', time: '2026-03-31T06:38:06Z', status: 'success' },
    ],
    metadata: { plan: 'pro', period: 'monthly', user_id: 'usr_287' },
  },
  {
    id: 'txn_4WnBx8T2hJp6qRaC', amount: 156200, currency: 'EUR', status: 'pending',
    description: 'Invoice #INV-2026-0389', card_brand: 'Visa', card_last4: '1881',
    card_exp: '09/26', card_country: 'NL', customer_email: 'j.vanderberg@example.com',
    customer_name: 'Jan van der Berg', merchant: 'CloudOps B.V.', merchant_id: 'merch_5k2Nm8',
    created: '2026-03-31T06:35:41Z', risk_score: 34, risk_level: 'medium',
    auth_code: '—', arn: '38291047562001948271003', fee: 452, net: 155748,
    timeline: [
      { event: 'Payment created', time: '2026-03-31T06:35:41Z', status: 'info' },
      { event: '3D Secure challenge initiated', time: '2026-03-31T06:35:43Z', status: 'pending' },
      { event: 'Awaiting customer authentication', time: '2026-03-31T06:35:43Z', status: 'pending' },
    ],
    metadata: { invoice_id: 'INV-2026-0389', contract: 'enterprise' },
  },
  {
    id: 'txn_7FqDw3K9nMr1vXgH', amount: 3200, currency: 'EUR', status: 'failed',
    description: 'Payment attempt — Widget Pack', card_brand: 'Mastercard', card_last4: '9012',
    card_exp: '01/25', card_country: 'ES', customer_email: 'carlos.garcia@example.com',
    customer_name: 'Carlos García', merchant: 'WidgetWorld SL', merchant_id: 'merch_9r4Xp6',
    created: '2026-03-31T06:31:12Z', risk_score: 67, risk_level: 'high',
    auth_code: '—', arn: '—', fee: 0, net: 0,
    timeline: [
      { event: 'Payment created', time: '2026-03-31T06:31:12Z', status: 'info' },
      { event: 'Card expired — issuer declined', time: '2026-03-31T06:31:13Z', status: 'error' },
    ],
    metadata: { product: 'widget_pack_pro', retry_count: '2' },
  },
  {
    id: 'txn_2HsEy6L4bPk8tZjN', amount: 47500, currency: 'EUR', status: 'refunded',
    description: 'Refund — Order #10401', card_brand: 'Visa', card_last4: '7890',
    card_exp: '06/28', card_country: 'DE', customer_email: 'anna.schmidt@example.com',
    customer_name: 'Anna Schmidt', merchant: 'TechStore GmbH', merchant_id: 'merch_8x9Kp2',
    created: '2026-03-31T06:28:55Z', risk_score: 5, risk_level: 'low',
    auth_code: 'C91034', arn: '92847103650048192736004', fee: 0, net: -47500,
    timeline: [
      { event: 'Original payment succeeded', time: '2026-03-30T14:12:33Z', status: 'success' },
      { event: 'Refund initiated by merchant', time: '2026-03-31T06:28:55Z', status: 'info' },
      { event: 'Refund processed', time: '2026-03-31T06:28:56Z', status: 'success' },
    ],
    metadata: { original_txn: 'txn_0AbCd1E2fGh3', reason: 'customer_request' },
  },
  {
    id: 'txn_5JtGz1M6cQn4uWkR', amount: 19900, currency: 'EUR', status: 'succeeded',
    description: 'Payment for Annual License', card_brand: 'Amex', card_last4: '3782',
    card_exp: '11/27', card_country: 'IT', customer_email: 'luca.rossi@example.com',
    customer_name: 'Luca Rossi', merchant: 'DevToolkit Srl', merchant_id: 'merch_2w8Jm4',
    created: '2026-03-31T06:22:07Z', risk_score: 15, risk_level: 'low',
    auth_code: 'D57812', arn: '61029384750029481637005', fee: 58, net: 19842,
    timeline: [
      { event: 'Payment created', time: '2026-03-31T06:22:07Z', status: 'info' },
      { event: '3D Secure authentication passed', time: '2026-03-31T06:22:09Z', status: 'success' },
      { event: 'Authorization approved by issuer', time: '2026-03-31T06:22:10Z', status: 'success' },
      { event: 'Payment captured', time: '2026-03-31T06:22:10Z', status: 'success' },
    ],
    metadata: { license: 'annual', seats: '5', referral: 'partner_2' },
  },
  {
    id: 'txn_8KuHz4N9dRo7wYlS', amount: 6500, currency: 'EUR', status: 'succeeded',
    description: 'API Integration Test', card_brand: 'Visa', card_last4: '4111',
    card_exp: '08/29', card_country: 'PT', customer_email: 'test@sandbox.eqaring.dev',
    customer_name: 'Test Customer', merchant: 'Sandbox Demo', merchant_id: 'merch_0t3Sb1',
    created: '2026-03-31T06:18:33Z', risk_score: 0, risk_level: 'low',
    auth_code: 'T00001', arn: '00000000000000000000006', fee: 19, net: 6481,
    timeline: [
      { event: 'Payment created (test mode)', time: '2026-03-31T06:18:33Z', status: 'info' },
      { event: 'Authorization approved (simulated)', time: '2026-03-31T06:18:33Z', status: 'success' },
      { event: 'Payment captured (simulated)', time: '2026-03-31T06:18:33Z', status: 'success' },
    ],
    metadata: { test: 'true', sdk_version: '2.4.1' },
  },
  {
    id: 'txn_3LvIa7O0eSp2xZmT', amount: 112000, currency: 'EUR', status: 'succeeded',
    description: 'Enterprise onboarding fee', card_brand: 'Mastercard', card_last4: '2223',
    card_exp: '04/28', card_country: 'AT', customer_email: 'office@alpinetech.at',
    customer_name: 'Alpine Technologies', merchant: 'CloudOps B.V.', merchant_id: 'merch_5k2Nm8',
    created: '2026-03-31T06:15:19Z', risk_score: 22, risk_level: 'low',
    auth_code: 'E38271', arn: '48271930460058372819007', fee: 324, net: 111676,
    timeline: [
      { event: 'Payment created', time: '2026-03-31T06:15:19Z', status: 'info' },
      { event: '3D Secure authentication passed', time: '2026-03-31T06:15:22Z', status: 'success' },
      { event: 'Authorization approved by issuer', time: '2026-03-31T06:15:23Z', status: 'success' },
      { event: 'Payment captured', time: '2026-03-31T06:15:23Z', status: 'success' },
    ],
    metadata: { contract_id: 'ENT-2026-042', department: 'procurement' },
  },
];

// High-risk mock metrics
const RISK_METRICS = {
  chargebackRatio: 0.1,    // percent
  chargebackStatus: 'safe', // safe | warning | danger
  fraudAlerts: 0,
};

// ================================================================
// HELPERS
// ================================================================

function formatAmount(cents, currency = 'EUR') {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency, minimumFractionDigits: 2 }).format(cents / 100);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatDateTime(iso) {
  return `${formatDate(iso)} · ${formatTime(iso)}`;
}

function statusLabel(s) {
  return { succeeded: 'Succeeded', pending: 'Pending', failed: 'Failed', refunded: 'Refunded' }[s] || s;
}

function syntaxHighlight(json) {
  return JSON.stringify(json, null, 2).replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+\.?\d*)/g,
    m => {
      let c = 'json-number';
      if (/^"/.test(m)) c = /:$/.test(m) ? 'json-key' : 'json-string';
      else if (/true|false/.test(m)) c = 'json-bool';
      return `<span class="${c}">${m}</span>`;
    }
  );
}

// ================================================================
// ROUTER
// ================================================================

function getRoute() {
  const hash = window.location.hash || '#/';
  if (hash.startsWith('#/transaction/')) return { page: 'transaction', id: hash.replace('#/transaction/', '') };
  if (hash.startsWith('#/transactions/')) return { page: 'transaction', id: hash.replace('#/transactions/', '') };
  if (hash === '#/transactions') return { page: 'transactions' };
  return { page: 'dashboard' };
}

function navigate(hash) { window.location.hash = hash; }

// ================================================================
// SVG helpers
// ================================================================
const infoIcon = `<svg class="metric-info-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 6v3.5M7 4.5v.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const settingsIcon = `<button class="metric-settings"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M3 3l1 1M10 10l1 1M3 11l1-1M10 4l1-1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></button>`;
const chevron = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const checkSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ================================================================
// PAGE: DASHBOARD — High-Risk Acquiring Overview
// ================================================================

function renderDashboard() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  const total = TRANSACTIONS.reduce((s, t) => s + (t.status === 'succeeded' ? t.amount : 0), 0);
  const totalNet = TRANSACTIONS.reduce((s, t) => s + (t.status === 'succeeded' ? t.net : 0), 0);
  const failedCount = TRANSACTIONS.filter(t => t.status === 'failed').length;
  const succeededCount = TRANSACTIONS.filter(t => t.status === 'succeeded').length;
  const customerCount = new Set(TRANSACTIONS.map(t => t.customer_email)).size;

  // Chargeback status badge
  const cbr = RISK_METRICS.chargebackRatio;
  const cbrStatus = RISK_METRICS.chargebackStatus;
  const cbrStatusLabel = { safe: 'Safe', warning: 'Warning', danger: 'Critical' }[cbrStatus];

  return `
    <div class="page">
      <div class="dashboard-header">
        <h1>Today</h1>
      </div>

      <div class="today-section">
        <!-- Floating Compliance card (sticky bottom-right, no API keys) -->
        <div class="float-card">
          <div class="float-card-section">
            <div class="float-card-header">
              <span class="float-card-title">Merchant Compliance</span>
              <button class="float-card-close">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
              </button>
            </div>
            <div class="compliance-step">
              <div class="compliance-check done">${checkSvg}</div>
              <span class="compliance-step-label done">Merchant Profile Verification</span>
            </div>
            <div class="compliance-step">
              <div class="compliance-check done">${checkSvg}</div>
              <span class="compliance-step-label done">Submit AML Documents</span>
            </div>
            <div class="compliance-step">
              <div class="compliance-check done">${checkSvg}</div>
              <span class="compliance-step-label done">Website Compliance & Terms Audit</span>
            </div>
            <div class="compliance-step">
              <div class="compliance-check pending"></div>
              <span class="compliance-step-label">Get Production API Keys</span>
            </div>
          </div>
        </div>

        <!-- Two-column layout: metrics+chart left, Recommendations+API right -->
        <div class="today-grid">
          <div class="today-left">
            <!-- High-Risk Metrics Row -->
            <div class="metrics-row">
              <div class="metric-top-item">
                <div class="metric-top-label">Gross volume ${chevron}</div>
                <div class="metric-top-value">${formatAmount(112450000)}</div>
                <div class="metric-top-comparison">
                  <span class="comparison-val">+2.4%</span>
                  <span class="comparison-text">vs. Last month</span>
                </div>
                <div class="metric-top-time">${timeStr}</div>
              </div>
              <div class="metric-top-item">
                <div class="metric-top-label">Yesterday ${chevron}</div>
                <div class="metric-top-value">${formatAmount(9820000)}</div>
                <div class="metric-top-comparison">
                  <span class="comparison-val">+15.2%</span>
                  <span class="comparison-text">vs. Previous day</span>
                </div>
              </div>
            </div>

            <!-- Chart -->
            <div class="chart-empty">
              <div class="chart-area" style="position: relative;">
                <div class="chart-grid">
                  <div class="chart-grid-line"></div>
                  <div class="chart-grid-line"></div>
                  <div class="chart-grid-line"></div>
                  <div class="chart-grid-line"></div>
                  <div class="chart-grid-line"></div>
                </div>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; inset: 0; z-index: 10;">
                  <defs>
                    <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.2"/>
                      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,90 L10,80 L20,85 L30,55 L40,70 L50,30 L60,45 L70,15 L80,25 L90,5 L100,10 L100,100 L0,100 Z" fill="url(#chartFade)"/>
                  <path d="M0,90 L10,80 L20,85 L30,55 L40,70 L50,30 L60,45 L70,15 L80,25 L90,5 L100,10" fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
                </svg>
                <div class="chart-baseline"></div>
                <div class="chart-cursor" style="left: 100%;"></div>
              </div>
              <div class="chart-time-labels">
                <span class="chart-time-label">12:00 AM</span>
                <span class="chart-time-label"></span>
                <span class="chart-time-label"></span>
                <span class="chart-time-label">12:00 AM</span>
              </div>
            </div>
          </div>

          <div class="today-right">
            <div class="api-keys-card">
              <div class="api-card-section">
                <div class="api-card-header">
                  <span class="api-card-title">Recommendations</span>
                  <button class="api-card-close">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4.5" stroke="currentColor" stroke-width="1"/><path d="M3.5 3.5l3 3M6.5 3.5l-3 3" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>
                  </button>
                </div>
                <p class="api-card-text">Design a custom payment flow with <a href="#">embedded UI components</a>.</p>
                <p class="api-card-text">Use <a href="#">Payment Links</a> to share payment pages with customers.</p>
              </div>
              <div class="api-card-section">
                <div class="api-card-header">
                  <span class="api-card-title">API keys</span>
                  <a href="#" class="api-card-link">View docs</a>
                </div>
                <div class="api-card-row">
                  <span class="api-card-row-label">Publishable key</span>
                  <span class="api-card-row-value">pk_test_51TGu07IsUTW...</span>
                </div>
                <div class="api-card-row">
                  <span class="api-card-row-label">Secret key</span>
                  <span class="api-card-row-value">sk_test_51TGu07IsUTW...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Balance Row -->
        <div class="balance-row">
          <div class="balance-item">
            <div class="balance-label">
              <span class="balance-label-text">EUR balance</span>
              <a class="balance-view-link">View</a>
            </div>
            <div class="balance-value">${formatAmount(11692950)}</div>
          </div>
          <div class="balance-item">
            <div class="payout-error">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L1 12h12L7 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 5v3M7 10v.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              <span>Couldn't load payouts.</span>
            </div>
          </div>
        </div>

        <!-- CTA Banner -->
        <div class="cta-banner">
          <h2>Get Ready for Production High-Risk Processing</h2>
          <p>Test critical scenarios: fraud detection, 3D Secure challenges, and chargeback disputes. Request production access when ready.</p>
          <button class="cta-banner-btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l6 3v4c0 3-2.5 4.5-6 6-3.5-1.5-6-3-6-6V4l6-3z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
            Request Setup Review
          </button>
        </div>
      </div>

      <!-- Your Overview Section -->
      <div class="overview-section">
        <div class="overview-header">
          <h2 class="overview-title">Your overview</h2>
          <div class="overview-actions">
            <button class="overview-action-btn">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
              Add
            </button>
            <button class="overview-action-btn">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M6 1v1M6 10v1M1 6h1M10 6h1M2.7 2.7l.7.7M8.6 8.6l.7.7M2.7 9.3l.7-.7M8.6 3.4l.7-.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              Edit
            </button>
          </div>
        </div>

        <div class="overview-filters">
          <span class="filter-label">Date range</span>
          <button class="filter-pill filter-pill-accent">Last 7 days ${chevron}</button>
          <button class="filter-pill">Daily ${chevron}</button>
          <div class="filter-divider"></div>
          <button class="filter-pill">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3.5" stroke="currentColor" stroke-width="1"/><path d="M5 3v2h2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>
            Compare
          </button>
          <button class="filter-pill">Previous period ${chevron}</button>
        </div>

        <div class="metric-grid">
          <!-- Card 1: Payments (donut) -->
          <div class="metric-card">
            <div class="metric-card-header">
              <span class="metric-card-title">Payments</span>
              ${infoIcon}
            </div>
            <div class="donut-chart-wrap">
              <svg class="donut-chart" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#E2E8F0" stroke-width="8"/>
                <circle cx="50" cy="50" r="38" fill="none" stroke="#4F46E5" stroke-width="8"
                  stroke-dasharray="${(succeededCount / TRANSACTIONS.length) * 238.76} 238.76"
                  stroke-linecap="round" transform="rotate(-90 50 50)"/>
                <circle cx="50" cy="50" r="38" fill="none" stroke="#DC2626" stroke-width="8"
                  stroke-dasharray="${(failedCount / TRANSACTIONS.length) * 238.76} 238.76"
                  stroke-dashoffset="${-(succeededCount / TRANSACTIONS.length) * 238.76}"
                  transform="rotate(-90 50 50)"/>
                <text x="50" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#111827" font-family="Roboto Mono, monospace">${TRANSACTIONS.length}</text>
                <text x="50" y="60" text-anchor="middle" font-size="7" fill="#9CA3AF" font-family="Roboto, sans-serif">payments</text>
              </svg>
            </div>
            <div class="metric-card-footer">
              <span class="metric-card-date-range"><span>Mar 25</span><span>Mar 31</span></span>
              <span class="metric-card-updated">Updated 10 min ago</span>
            </div>
          </div>

          <!-- Card 2: Processing Volume -->
          <div class="metric-card">
            <div class="metric-card-header">
              <span class="metric-card-title">Processing Volume</span>
              ${infoIcon}
              ${settingsIcon}
            </div>
            <div class="metric-card-value">${formatAmount(total)}</div>
            <div class="metric-card-compare">€0.00 previous period</div>
            <div class="metric-mini-chart">
              <span class="mini-chart-y-label">€0.01</span>
              <div class="mini-chart-baseline"></div>
            </div>
            <div class="metric-card-footer">
              <span class="metric-card-date-range"><span>Mar 25</span><span>Mar 31</span></span>
              <span class="metric-card-updated">Updated 10 min ago</span>
              <a class="metric-card-details">More details</a>
            </div>
          </div>

          <!-- Card 3: Net Volume -->
          <div class="metric-card">
            <div class="metric-card-header">
              <span class="metric-card-title">Net Volume</span>
              ${infoIcon}
            </div>
            <div class="metric-card-value">${formatAmount(totalNet)}</div>
            <div class="metric-card-compare">€0.00 previous period</div>
            <div class="metric-mini-chart">
              <span class="mini-chart-y-label">€0.01</span>
              <div class="mini-chart-baseline"></div>
            </div>
            <div class="metric-card-footer">
              <span class="metric-card-date-range"><span>Mar 25</span><span>Mar 31</span></span>
              <span class="metric-card-updated">Updated 10 min ago</span>
              <a class="metric-card-details">More details</a>
            </div>
          </div>

          <!-- Card 4: Chargebacks -->
          <div class="metric-card">
            <div class="metric-card-header">
              <span class="metric-card-title">Chargebacks</span>
              ${infoIcon}
            </div>
            <div class="metric-card-value">0</div>
            <div class="metric-card-compare">0.0% ratio · Threshold: 1.0%</div>
            <div class="no-data-wrap">
              <span class="no-data-badge">No disputes</span>
            </div>
            <div class="metric-card-footer">
              <span class="metric-card-date-range"><span>Mar 25</span><span>Mar 31</span></span>
              <span class="metric-card-updated">Updated 10 min ago</span>
            </div>
          </div>

          <!-- Card 5: Failed & Declined -->
          <div class="metric-card">
            <div class="metric-card-header">
              <span class="metric-card-title">Failed & Declined</span>
              ${infoIcon}
            </div>
            <div class="metric-card-value">${failedCount}</div>
            <div class="metric-card-compare">${formatAmount(3200)} total failed</div>
            <div class="metric-mini-chart">
              <div class="mini-chart-baseline" style="background: var(--error);"></div>
            </div>
            <div class="metric-card-footer">
              <span class="metric-card-date-range"><span>Mar 25</span><span>Mar 31</span></span>
              <span class="metric-card-updated">Updated 10 min ago</span>
            </div>
          </div>

          <!-- Card 6: Top Merchants by Volume -->
          <div class="metric-card">
            <div class="metric-card-header">
              <span class="metric-card-title">Top Merchants by Volume</span>
              ${infoIcon}
              <span class="metric-card-period">All time</span>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;gap:10px;padding-top:10px;">
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.786rem;">
                <span style="color:var(--text-secondary);font-weight:500;">1. CloudOps B.V.</span>
                <span style="color:var(--text-primary);font-weight:700;font-family:var(--font-mono);font-variant-numeric:tabular-nums;">${formatAmount(268200)}</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.786rem;">
                <span style="color:var(--text-secondary);font-weight:500;">2. TechStore GmbH</span>
                <span style="color:var(--text-primary);font-weight:700;font-family:var(--font-mono);font-variant-numeric:tabular-nums;">${formatAmount(24999)}</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.786rem;">
                <span style="color:var(--text-secondary);font-weight:500;">3. DevToolkit Srl</span>
                <span style="color:var(--text-primary);font-weight:700;font-family:var(--font-mono);font-variant-numeric:tabular-nums;">${formatAmount(19900)}</span>
              </div>
            </div>
            <div class="metric-card-footer">
              <span class="metric-card-date-range"><span>Mar 25</span><span>Mar 31</span></span>
              <span class="metric-card-updated">Updated 10 min ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="dt-section">
        <div class="dt-header-row">
          <h2 class="dt-title">Recent transactions</h2>
        </div>

        <div class="dt-table-wrapper">
          <table class="dt-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Payment method</th>
                <th>Description</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Refunded date</th>
                <th>Decline reason</th>
              </tr>
            </thead>
            <tbody>
              <tr style="cursor: pointer;" onclick="window.location.hash='#/transactions/tx_1'">
                <td>
                  <div class="dt-amount-cell">
                    <strong>€99.00 EUR</strong>
                    <span class="dt-badge-success">Succeeded <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  </div>
                </td>
                <td>
                  <div class="dt-card-brand">
                    <span class="dt-card-icon" style="background: #1434CB;">VISA</span>
                    <span class="dt-card-num">•••• 4242</span>
                  </div>
                </td>
                <td>Subscription creation</td>
                <td>j.martinez@example.com</td>
                <td>Nov 14, 2025, 4:19 PM</td>
                <td class="dt-text-subtle">—</td>
                <td class="dt-text-subtle">—</td>
              </tr>
              <tr style="cursor: pointer;" onclick="window.location.hash='#/transactions/tx_2'">
                <td>
                  <div class="dt-amount-cell">
                    <strong>€125.00 EUR</strong>
                    <span class="dt-badge-refunded">Refunded <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  </div>
                </td>
                <td>
                  <div class="dt-card-brand">
                    <span class="dt-card-icon" style="background: #EB001B;">MC</span>
                    <span class="dt-card-num">•••• 4122</span>
                  </div>
                </td>
                <td>Payment for Order #9201</td>
                <td>john.doe@example.com</td>
                <td>Nov 14, 2025, 3:00 PM</td>
                <td>Nov 14, 5:12 PM</td>
                <td class="dt-text-subtle">—</td>
              </tr>
              <tr style="cursor: pointer;" onclick="window.location.hash='#/transactions/tx_3'">
                <td>
                  <div class="dt-amount-cell">
                    <strong>€9,850.50 EUR</strong>
                    <span class="dt-badge-success">Succeeded <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  </div>
                </td>
                <td>
                  <div class="dt-card-brand">
                    <span class="dt-card-icon" style="background: #2776B3;">AMEX</span>
                    <span class="dt-card-num">•••• 1005</span>
                  </div>
                </td>
                <td>Enterprise API License</td>
                <td>contact@corp.io</td>
                <td>Nov 13, 2025, 10:11 AM</td>
                <td class="dt-text-subtle">—</td>
                <td class="dt-text-subtle">—</td>
              </tr>
              <tr style="cursor: pointer;" onclick="window.location.hash='#/transactions/tx_4'">
                <td>
                  <div class="dt-amount-cell">
                    <strong>€49.99 EUR</strong>
                    <span class="dt-badge-failed">Failed <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3l4 4M7 3l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
                  </div>
                </td>
                <td>
                  <div class="dt-card-brand">
                    <span class="dt-card-icon" style="background: #1434CB;">VISA</span>
                    <span class="dt-card-num">•••• 5519</span>
                  </div>
                </td>
                <td>Monthly SaaS Plan</td>
                <td>sarah.kim@example.com</td>
                <td>Nov 13, 2025, 9:02 AM</td>
                <td class="dt-text-subtle">—</td>
                <td>Insufficient Funds</td>
              </tr>
              <tr style="cursor: pointer;" onclick="window.location.hash='#/transactions/tx_5'">
                <td>
                  <div class="dt-amount-cell">
                    <strong>€75.00 EUR</strong>
                    <span class="dt-badge-disputed">Disputed <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 3v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="5" cy="7.5" r="0.5" fill="currentColor"/></svg></span>
                  </div>
                </td>
                <td>
                  <div class="dt-card-brand">
                    <span class="dt-card-icon" style="background: #EB001B;">MC</span>
                    <span class="dt-card-num">•••• 9001</span>
                  </div>
                </td>
                <td>One-off payment</td>
                <td>angry.user@mail.com</td>
                <td>Nov 12, 2025, 1:45 PM</td>
                <td class="dt-text-subtle">—</td>
                <td>Chargeback</td>
              </tr>
            </tbody>
          </table>
          <div class="dt-table-footer" style="padding-top: 16px;">
            <a href="#/transactions" style="color:var(--accent);font-weight:600;font-size:0.857rem;text-decoration:none;">View all transactions &rarr;</a>
          </div>
    </div>
  `;
}

// ================================================================
// PAGE: TRANSACTIONS LIST
// ================================================================

function renderTransactionsPage() {
  return `
    <div class="page">
      <div class="sandbox-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.3"/>
          <path d="M5 5h6M5 8h4M5 11h6" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
        </svg>
        <span><strong>Sandbox Mode</strong> — Showing test transactions only. Fraud & chargeback scenarios available.</span>
      </div>
      <div class="page-header">
        <div class="page-header-row">
          <div>
            <h1>Transactions</h1>
            <p>All acquiring transactions in your sandbox environment</p>
          </div>
          <div style="display:flex;gap:12px">
            <button class="btn btn-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M3 6l4 4 4-4M2 12h10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Export
            </button>
            <button class="btn btn-primary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
              Create test payment
            </button>
          </div>
        </div>
      </div>
      ${renderTransactionsTable(TRANSACTIONS)}
    </div>
  `;
}

// ================================================================
// COMPONENT: TRANSACTIONS TABLE
// ================================================================

function renderTransactionsTable(txns) {
  const rows = txns.map(t => `
    <tr data-txn-id="${t.id}" style="cursor: pointer;" onclick="window.location.hash='#/transactions/'+this.dataset.txnId">
      <td><span class="txn-id">${t.id}</span></td>
      <td><span class="amount">${formatAmount(t.amount, t.currency)}</span></td>
      <td><span class="status-badge ${t.status}"><span class="status-dot"></span>${statusLabel(t.status)}</span></td>
      <td>${t.description}</td>
      <td><div class="card-info"><span class="card-brand">${t.card_brand}</span><span class="card-last4">•••• ${t.card_last4}</span></div></td>
      <td><span class="timestamp">${formatDateTime(t.created)}</span></td>
    </tr>
  `).join('');

  return `
    <div class="table-section">
      <div class="table-header">
        <span class="table-title">Transactions</span>
        <div class="table-actions">
          <div class="search-input">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
            <input type="text" placeholder="Search transactions..." />
          </div>
          <button class="filter-btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
            Filter
          </button>
        </div>
      </div>
      <table class="data-table">
        <thead><tr><th>Transaction ID</th><th>Amount</th><th>Status</th><th>Description</th><th>Card</th><th>Created</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="table-footer">
        <span class="table-footer-info">Showing ${txns.length} of ${TRANSACTIONS.length} transactions</span>
        <div class="table-footer-nav"><button class="page-btn active">1</button></div>
      </div>
    </div>
  `;
}

// ================================================================
// PAGE: TRANSACTION DETAIL
// ================================================================

function renderTransactionDetail(txnId) {
  return `
    <div class="page" style="background:#FFF;">
      <!-- HEADER -->
      <div class="txn-dp-breadcrumb">
        <a href="#/">&larr; Back</a>
      </div>
      <div class="txn-dp-header">
        <div>
          <h1 style="margin-bottom:6px;">Transaction created <span style="font-weight:400;">Nov 14, 2025 at 4:18 PM</span>
            <span class="dt-badge-success" style="font-size:13px;margin-left:12px;vertical-align:middle;">Complete</span>
          </h1>
          <div style="font-size:14px;color:var(--text-secondary);display:flex;align-items:center;gap:12px;">
            <a href="mailto:j.martinez@example.com" style="color:var(--accent);text-decoration:none;display:inline-flex;align-items:center;gap:6px;font-weight:400;"><svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M4 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>j.martinez@example.com</a>
            <span>&bull;</span>
            <span>🇪🇸 Spain</span>
            <span style="margin-left:auto;font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary);">txn_01kmjp8zsfxr2e3p16ksg9pm6d</span>
          </div>
        </div>
        <div class="txn-dp-header-actions">
          <button class="btn btn-secondary" style="padding:8px 16px;font-size:14px;display:flex;align-items:center;gap:6px;">Refund</button>
          <button class="btn btn-secondary" style="padding:8px 16px;font-size:14px;">Actions</button>
        </div>
      </div>

      <!-- TRANSACTION DETAILS BAR -->
      <div class="txn-dp-section">
        <div class="txn-dp-section-header">
          <h3>Transaction details</h3>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-top:4px;">
          <div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">Type</div>
            <div style="font-size:14px;"><a href="#" style="color:var(--accent);text-decoration:none;font-weight:400;">One-time payment</a></div>
          </div>
          <div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">Payment method</div>
            <div style="font-size:14px;display:flex;align-items:center;gap:6px;">
              <span class="txn-dp-card-badge"><span class="txn-dp-card-icon">VISA</span> 4242</span> exp. 03/31
            </div>
          </div>
          <div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">3D Secure</div>
            <div style="font-size:14px;">Authenticated</div>
          </div>
          <div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">Reference</div>
            <div style="font-family:var(--font-mono);font-size:13px;">INV-2025-10493</div>
          </div>
        </div>
      </div>

      <!-- DUAL CARD: Breakdown + Amount -->
      <div class="txn-dp-section">
        <div style="display:grid;grid-template-columns:1fr 280px;gap:24px;">
          <div>
            <div style="font-size:14px;font-weight:700;margin-bottom:8px;">Payment Breakdown</div>
            <div class="txn-dp-kv-row">
              <span class="txn-dp-kv-label">Amount paid</span>
              <span class="txn-dp-kv-value">&#8364;99.00</span>
            </div>
            <div class="txn-dp-kv-row">
              <span class="txn-dp-kv-label">Transaction total</span>
              <span class="txn-dp-kv-value">&#8364;99.00</span>
            </div>
            <div class="txn-dp-kv-row">
              <span class="txn-dp-kv-label">Tax withheld</span>
              <span class="txn-dp-kv-value" style="color:var(--danger);">-&#8364;17.18</span>
            </div>
            <div class="txn-dp-kv-row">
              <span class="txn-dp-kv-label">Processing fee</span>
              <span class="txn-dp-kv-value" style="color:var(--danger);">-&#8364;5.45</span>
            </div>
            <div class="txn-dp-kv-row">
              <span class="txn-dp-kv-label">Rolling reserve (10%)</span>
              <span class="txn-dp-kv-value" style="color:#E69500;">-&#8364;9.90</span>
            </div>
            <div class="txn-dp-kv-row" style="border-bottom:none;padding-top:12px;border-top:1px solid #E5E7EB;">
              <span class="txn-dp-kv-label" style="font-weight:700;color:var(--text-primary);">Net amount</span>
              <span class="txn-dp-kv-value" style="font-weight:700;">&#8364;66.47</span>
            </div>
            <div class="txn-dp-kv-row" style="border-bottom:none;">
              <span class="txn-dp-kv-label" style="font-weight:700;color:var(--text-primary);">Total earnings</span>
              <span class="txn-dp-kv-value" style="font-weight:700;">&#8364;76.37</span>
            </div>
          </div>
          <div style="background:#F9FAFB;border-radius:var(--radius-md);padding:24px;display:flex;flex-direction:column;gap:16px;">
            <div>
              <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">Amount paid</div>
              <div style="font-size:28px;font-weight:700;">&#8364;99.00</div>
            </div>
            <div>
              <span class="dt-badge-success" style="font-size:13px;">Complete</span>
              <div style="font-size:13px;color:var(--text-secondary);margin-top:6px;">paid on Nov 14, 2025 at 4:19 PM</div>
            </div>
            <div style="border-top:1px solid var(--border);padding-top:16px;">
              <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">Total earnings</div>
              <div style="font-size:28px;font-weight:700;">&#8364;76.37</div>
            </div>
          </div>
        </div>
      </div>

      <!-- TWO COLUMN LAYOUT -->
      <div class="txn-dp-layout">
        <div>
          <!-- Recent activity -->
          <div class="txn-dp-section">
            <div class="txn-dp-section-header">
              <h3>Recent activity</h3>
            </div>
            <div class="txn-dp-timeline">
              <div class="txn-dp-tl-item">
                <div class="txn-dp-tl-icon success"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                <div class="txn-dp-tl-content">
                  <div class="txn-dp-tl-title">Payment succeeded</div>
                  <div class="txn-dp-tl-time">Nov 14, 2025, 4:19 PM</div>
                </div>
              </div>
              <div class="txn-dp-tl-item">
                <div class="txn-dp-tl-icon"><svg viewBox="0 0 14 14" fill="none"><rect x="3" y="6" width="8" height="6" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 6V4a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.2"/></svg></div>
                <div class="txn-dp-tl-content">
                  <div class="txn-dp-tl-title">3D Secure authentication succeeded</div>
                  <div class="txn-dp-tl-desc">Authenticated via challenge flow (3DS 2.2.0). Challenge window presented by issuer.</div>
                  <div class="txn-dp-tl-time">Nov 14, 2025, 4:19 PM</div>
                </div>
              </div>
              <div class="txn-dp-tl-item">
                <div class="txn-dp-tl-icon"><svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M7 4v3l2 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></div>
                <div class="txn-dp-tl-content">
                  <div class="txn-dp-tl-title">Payment started</div>
                  <div class="txn-dp-tl-time">Nov 14, 2025, 4:18 PM</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="txn-dp-section">
            <div class="txn-dp-section-header">
              <h3>Payment method</h3>
            </div>
            <div class="txn-dp-grid-summary">
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:90px;font-weight:600;color:var(--text-primary)">ID</span><span class="txn-dp-grid-value text" style="font-family:var(--font-mono);font-size:13px;">pm_1STOIligfoDqsYeTV31cP6Ph</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:90px;font-weight:600;color:var(--text-primary)">Number</span><span class="txn-dp-grid-value text" style="font-family:var(--font-mono)">**** 4242</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:90px;font-weight:600;color:var(--text-primary)">Fingerprint</span><span class="txn-dp-grid-value" style="font-family:var(--font-mono);font-size:13px;"><a href="#" style="color:var(--accent);text-decoration:none;">yM0FLNG5Sbu1NMll</a></span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:90px;font-weight:600;color:var(--text-primary)">Expires</span><span class="txn-dp-grid-value text">03 / 2031</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:90px;font-weight:600;color:var(--text-primary)">Type</span><span class="txn-dp-grid-value text">Visa credit card</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:90px;font-weight:600;color:var(--text-primary)">Issuer</span><span class="txn-dp-grid-value text">CAIXABANK S.A.</span></div>
              </div>
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:100px;font-weight:600;color:var(--text-primary)">Owner</span><span class="txn-dp-grid-value text">J. Martinez</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:100px;font-weight:600;color:var(--text-primary)">Owner email</span><span class="txn-dp-grid-value text">j.martinez@example.com</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:100px;font-weight:600;color:var(--text-primary)">Origin</span><span class="txn-dp-grid-value text">Spain</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:100px;font-weight:600;color:var(--text-primary)">CVC check</span><span class="txn-dp-grid-value text">Passed</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:100px;font-weight:600;color:var(--text-primary)">AVS check</span><span class="txn-dp-grid-value text">Match</span></div>
                <div class="txn-dp-grid-item" style="justify-content:flex-start;gap:24px"><span class="txn-dp-grid-label" style="width:100px;font-weight:600;color:var(--text-primary)">IP / Card match</span><span class="txn-dp-grid-value text" style="color:var(--success);">Match</span></div>
              </div>
            </div>
          </div>

          <!-- Events -->
          <div class="txn-dp-section">
            <div class="txn-dp-section-header">
              <h3>Events</h3>
            </div>
            <div class="txn-dp-event-list">
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc">Payment for &#8364;99.00 has succeeded</div>
                <div class="txn-dp-event-time">11/14/25, 4:19:11 PM</div>
              </div>
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc">Charge of &#8364;99.00 completed</div>
                <div class="txn-dp-event-time">11/14/25, 4:19:11 PM</div>
              </div>
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc">Rolling reserve of &#8364;9.90 (10%) withheld. Release: May 14, 2026</div>
                <div class="txn-dp-event-time">11/14/25, 4:19:11 PM</div>
              </div>
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc">Payment created</div>
                <div class="txn-dp-event-time">11/14/25, 4:18:35 PM</div>
              </div>
            </div>
          </div>

          <!-- Logs -->
          <div class="txn-dp-section">
            <div class="txn-dp-section-header">
              <h3>Logs</h3>
            </div>
            <div class="txn-dp-event-list">
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc" style="display:flex;align-items:center;gap:8px;">
                  <strong>POST /v1/checkout/sessions</strong>
                  <span style="border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-size:12px;color:var(--text-secondary);">200 OK</span>
                </div>
                <div class="txn-dp-event-time">11/14/25, 4:17:14 PM</div>
              </div>
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc" style="display:flex;align-items:center;gap:8px;">
                  <strong>POST /v1/payment_intents</strong>
                  <span style="border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-size:12px;color:var(--text-secondary);">200 OK</span>
                </div>
                <div class="txn-dp-event-time">11/14/25, 4:17:14 PM</div>
              </div>
              <div class="txn-dp-event-item">
                <div class="txn-dp-event-desc" style="display:flex;align-items:center;gap:8px;">
                  <strong>POST /v1/payment_intents/.../confirm</strong>
                  <span style="border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-size:12px;color:var(--text-secondary);">200 OK</span>
                </div>
                <div class="txn-dp-event-time">11/14/25, 4:18:35 PM</div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div>
          <!-- Risk and Compliance -->
          <div style="background:#F9FAFB;border-radius:var(--radius-md);padding:24px;margin-bottom:16px;">
            <div style="font-size:16px;font-weight:700;margin-bottom:16px;">Risk and Compliance</div>
            <div class="txn-dp-vlist">
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Risk score</div>
                <div class="txn-dp-vval text" style="display:flex;align-items:center;gap:8px;">
                  <div style="width:100%;height:6px;background:#E5E7EB;border-radius:3px;overflow:hidden;flex-shrink:1;"><div style="width:15%;height:100%;background:var(--success);border-radius:3px;"></div></div>
                  <span style="font-weight:600;font-size:13px;white-space:nowrap;">15 Low</span>
                </div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">3D Secure</div>
                <div class="txn-dp-vval text">Authenticated (v2.2.0)</div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">CVC verification</div>
                <div class="txn-dp-vval text">Passed</div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">IP / Card country</div>
                <div class="txn-dp-vval text" style="color:var(--success);">Match (ES / ES)</div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">KYC status</div>
                <div class="txn-dp-vval text">Verified</div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Device IP</div>
                <div class="txn-dp-vval">8.118.5.5 <span style="color:var(--text-tertiary);">(Madrid, ES)</span></div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Device</div>
                <div class="txn-dp-vval">Desktop / Chrome / Mac OS X</div>
              </div>
            </div>
          </div>

          <!-- Customer -->
          <div style="background:#F9FAFB;border-radius:var(--radius-md);padding:24px;margin-bottom:16px;">
            <div style="font-size:16px;font-weight:700;margin-bottom:16px;">Customer</div>
            <div class="txn-dp-vlist">
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">ID</div>
                <div class="txn-dp-vval"><a href="#" style="color:var(--accent);text-decoration:none;font-family:var(--font-mono);font-size:13px;">cus_TQFG3yWDzVeXm4</a></div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Name</div>
                <div class="txn-dp-vval text">J. Martinez</div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Email</div>
                <div class="txn-dp-vval text"><a href="mailto:j.martinez@example.com" style="color:var(--accent);text-decoration:none;display:inline-flex;align-items:center;gap:5px;"><svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>j.martinez@example.com</a></div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Country</div>
                <div class="txn-dp-vval text">Spain</div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Lifetime volume</div>
                <div class="txn-dp-vval text" style="font-weight:600;">&#8364;2,847.00 <span style="font-weight:400;color:var(--text-secondary);">(31 txns)</span></div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">Chargebacks</div>
                <div class="txn-dp-vval text"><span style="font-weight:600;">0</span> <span style="color:var(--text-secondary);">/ 0.0% ratio</span></div>
              </div>
              <div class="txn-dp-vitem">
                <div class="txn-dp-vlabel">First seen</div>
                <div class="txn-dp-vval">Aug 3, 2024</div>
              </div>
            </div>
          </div>

          <!-- Metadata -->
          <div style="background:#F9FAFB;border-radius:var(--radius-md);padding:24px;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <div style="font-size:16px;font-weight:700;">Metadata</div>
              <button class="btn-ghost" style="padding:2px;border:1px solid var(--border);border-radius:4px;"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M9.5 2L12 4.5 M10.5 1l2.5 2.5L4 12.5H1.5V10L10.5 1z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
            <div class="txn-dp-metadata-box">No metadata</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
// ================================================================
// APP
// ================================================================

const mainEl = document.getElementById('main-content');

function updateNavActive(page) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  if (page === 'dashboard') document.getElementById('nav-home')?.classList.add('active');
  else if (page === 'transactions' || page === 'transaction') document.getElementById('nav-transactions')?.classList.add('active');
}

function initDashboard() {
  const chartArea = document.querySelector('.chart-area');
  const cursor = document.querySelector('.chart-cursor');
  if (chartArea && cursor) {
    const points = [[0,170], [80,150], [160,160], [240,100], [320,130], [400,60], [480,90], [560,30], [640,60], [720,20], [800,30]];
    
    let cursorDot = document.querySelector('.chart-cursor-dot');
    if (!cursorDot) {
      cursorDot = document.createElement('div');
      cursorDot.className = 'chart-cursor-dot';
      chartArea.appendChild(cursorDot);
    }
    
    let tooltip = document.querySelector('.chart-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'chart-tooltip';
      tooltip.innerHTML = `
        <div class="chart-tooltip-title">Gross volume</div>
        <div class="chart-tooltip-divider"></div>
        <div class="chart-tooltip-row">
          <div class="chart-tooltip-info">
            <div class="chart-tooltip-color"></div>
            <span class="chart-tooltip-date"></span>
          </div>
          <span class="chart-tooltip-value"></span>
        </div>
      `;
      chartArea.appendChild(tooltip);
    }

    chartArea.addEventListener('mousemove', (e) => {
      const rect = chartArea.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      cursor.style.left = `${x}px`;
      cursor.style.display = 'block';
      
      const mappedX = (x / rect.width) * 800;
      let mappedY = 200;
      for (let i = 0; i < points.length - 1; i++) {
        if (mappedX >= points[i][0] && mappedX <= points[i+1][0]) {
          const ratio = (mappedX - points[i][0]) / (points[i+1][0] - points[i][0]);
          mappedY = points[i][1] + ratio * (points[i+1][1] - points[i][1]);
          break;
        }
      }
      const yPx = (mappedY / 200) * rect.height;
      
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${yPx}px`;
      cursorDot.style.display = 'block';
      
      const pct = (800 - mappedX) / 800;
      const date = new Date(Date.now() - pct * 24 * 60 * 60 * 1000);
      const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
      const dateStr = date.toLocaleString('en-US', options).replace(',', '');
      
      const baseValue = 1124500;
      const value = baseValue * (1 - (mappedY - 20) / 180 * 0.3);
      const formattedValue = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(value);
      
      tooltip.querySelector('.chart-tooltip-date').innerText = dateStr;
      tooltip.querySelector('.chart-tooltip-value').innerText = formattedValue;
      tooltip.style.display = 'block';
      
      const tRect = tooltip.getBoundingClientRect();
      let left = x + 16;
      let top = yPx - tRect.height / 2;
      
      if (left + tRect.width > rect.width) left = x - tRect.width - 16;
      top = Math.max(0, Math.min(top, rect.height - tRect.height - 4));
      
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    });
    
    chartArea.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
      if (cursorDot) cursorDot.style.display = 'none';
      if (tooltip) tooltip.style.display = 'none';
    });
  }
}

function render() {
  const route = getRoute();
  updateNavActive(route.page);

  switch (route.page) {
    case 'dashboard': 
      mainEl.innerHTML = renderDashboard(); 
      initDashboard();
      break;
    case 'transactions': mainEl.innerHTML = renderTransactionsPage(); break;
    case 'transaction': mainEl.innerHTML = renderTransactionDetail(route.id); break;
    default: 
      mainEl.innerHTML = renderDashboard();
      initDashboard();
  }

  document.querySelectorAll('[data-txn-id]').forEach(row => {
    row.addEventListener('click', () => navigate(`#/transaction/${row.dataset.txnId}`));
  });

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(btn.dataset.copy);
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="var(--success)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      setTimeout(() => {
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M10 4V3a1.5 1.5 0 0 0-1.5-1.5H3A1.5 1.5 0 0 0 1.5 3v5.5A1.5 1.5 0 0 0 3 10h1" stroke="currentColor" stroke-width="1.2"/></svg>`;
      }, 1500);
    });
  });
}

window.addEventListener('hashchange', render);
render();
