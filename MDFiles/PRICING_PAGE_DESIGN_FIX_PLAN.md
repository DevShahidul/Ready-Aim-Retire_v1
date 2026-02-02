# Pricing Page Design Fix Plan

## Overview

This document outlines the detailed plan to fix the pricing page (`src/pages/pricing.astro`) to match the approved design shown in `pricing_good.png`. The current implementation (`pricing_bad.png`) has several visual and structural discrepancies that need to be corrected.

---

## Reference Images

| Image | Description |
|-------|-------------|
| `designs/pricing_bad.png` | Current state (incorrect) |
| `designs/pricing_good.png` | Desired design for top section |
| `designs/Pricing.png` | Full page design reference |

---

## Issues Identified

### Issue 1: Title Font is Incorrect
**Current:** "Simple, transparent pricing" uses `'Inter', sans-serif`
**Required:** Should use a **serif font** (similar to the hero h1 which uses `'Playfair Display'`)

**Solution:**
- Create a reusable CSS class `.heading-serif` in `style.css` that applies the serif font
- This class should be available for use across multiple pages

---

### Issue 2: Price Badge Shape is Wrong
**Current:** Full pill shape (rounded on both left AND right sides)
**Required:** Half-pill shape - rounded on LEFT side only, flat/square on RIGHT side

**Visual comparison:**
```
Current (wrong):    ( $115 /y )     <- rounded both sides
Desired (correct):  ( $115 /y |     <- rounded left, flat right
```

**CSS Changes Required:**
- Change `border-radius` from `50px` or `99em` to `50px 0 0 50px` (top-left, top-right, bottom-right, bottom-left)

---

### Issue 3: Price Badge Position and Size
**Current:** Has padding around the badge, badge is narrow
**Required:**
- Badge should be flush to the TOP-RIGHT corner of the card (no padding above or to the right)
- Badge should be wider to accommodate the price text comfortably

**CSS Changes Required:**
- Set `top: 0` and `right: 0` for positioning
- Remove any margin or padding that creates space on top/right
- Increase padding inside the badge to make it wider
- Ensure the card has `overflow: visible` or the badge extends properly

---

### Issue 4: Wrong Number of Subscription Options
**Current:** 5 options (Basic, Pro, **Premium**, Lifetime, Professional)
**Required:** 4 options (Basic, Pro, Lifetime, Professional)

**Action:** Remove the "Premium" pricing card entirely

---

### Issue 5: Wrong Pricing
**Current Pro price:** $99/yr
**Required Pro price:** $115/yr

---

### Issue 6: Incorrect Subtitle Text
**Current:**
> "OnTarget Pro is free to try and affordable to use. Whether you're just starting out or fine-tuning your retirement strategy, we have a plan that fits your needs."

**Required:**
> "OnTarget is free to start and powerful when you're ready to go deeper. Whether you're just exploring or building a long-term plan, you only pay for what you need."

---

### Issue 7: Incorrect Plan Descriptions and Features
Each plan's description and feature list must match the design exactly.

#### Basic Plan ($0/y)
**Description:** "For exploring your retirement picture and getting oriented."

**Features:**
- Build a basic retirement plan
- Visualize your financial timeline
- Track net worth at a high level
- Run limited scenarios
- Save your plan for a limited time

**Limitations:**
- Limited scenario creation
- Plan saved for a limited time
- Premium features locked

#### Pro Plan ($115/y)
**Description:** "For those ready to take aim, who want clarity, control, and confidence."

**Features heading:** "Everything in Basic, plus:"
- Save unlimited plans
- Create and compare unlimited scenarios
- Full historical stress testing
- Advanced withdrawal strategy modeling
- Detailed retirement budgeting
- Tax-aware planning across all account types
- Social Security planning tools
- Plan for major life events, expected, and unexpected expenses
- Ongoing updates as your life changes

#### Lifetime Plan ($1199/y)
**Description:** "Get all the great features of Pro with a single one-time payment."

**Features:**
- Everything in Pro
- One-time payment
- No subscriptions

#### Professional Plan ($549/y)
**Description:** "Modern financial planning software for financial advisors and coaches."

**Button:** "Coming Soon"

**Features:**
- Everything in Premium
- 20 Client Seats
- Plan team **meetings**
- Advisor Dashboard

---

### Issue 8: Professional Card Background Color
**Current:** Uses `#1a1a2e` (dark navy)
**Required:** Should use `#415776` (slate blue)

**Solution:**
- Add `--color-professional: #415776` to CSS `:root` variables
- Update `.pricing-card-v2.dark` to use this color OR create a new `.pricing-card-v2.professional` variant

---

### Issue 9: Teal Color Should Be Defined as Root Variable
**Required color:** `#41bab4`

**Current state:** This is already defined as `--color-primary: #41bab4` in style.css

**Action:** Verify this is being used consistently for the price badge backgrounds. The price badges should use this teal color.

---

## Implementation Plan

### Phase 1: CSS Root Variables and Typography

**File:** `src/styles/style.css`

1. Add new root CSS variable for Professional card:
   ```css
   :root {
       /* ... existing variables ... */
       --color-professional: #415776;    /* Professional card background */
   }
   ```

2. Add reusable serif heading class:
   ```css
   /* Serif Heading - Reusable across pages */
   .heading-serif {
       font-family: 'Playfair Display', Georgia, serif;
   }
   ```

---

### Phase 2: Price Badge Styling

**File:** `src/styles/style.css`

Update the `.price-badge` styles:

```css
/* Price Badge - Half-pill positioned in top-right corner */
.price-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-primary);  /* #41bab4 teal */
    border-radius: 50px 0 0 50px;  /* Rounded left, flat right */
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem 0.75rem 1.5rem;  /* More horizontal padding */
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
}

.price-badge .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
}

.price-badge .period {
    font-size: 0.85rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    margin-left: 0.25em;
}
```

Remove the individual badge color classes (badge-green, badge-blue, badge-teal, badge-purple) and use the consistent teal color for all non-Professional cards.

---

### Phase 3: Professional Card Styling

**File:** `src/styles/style.css`

```css
/* Professional variant - uses slate blue instead of dark navy */
.pricing-card-v2.professional {
    background: var(--color-professional);  /* #415776 */
    border-color: var(--color-professional);
}

.pricing-card-v2.professional .plan-name,
.pricing-card-v2.professional .plan-description,
.pricing-card-v2.professional .plan-features li {
    color: #ffffff;
}

.pricing-card-v2.professional .plan-description {
    color: rgba(255, 255, 255, 0.8);
}

.pricing-card-v2.professional .plan-features li i {
    color: var(--color-primary);  /* Teal checkmarks */
}

.pricing-card-v2.professional .btn-choose-plan {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.pricing-card-v2.professional .btn-choose-plan:hover {
    background: rgba(255, 255, 255, 0.25);
}
```

---

### Phase 4: Update Grid to 4 Columns

**File:** `src/pages/pricing.astro`

Change from 5-card layout to 4-card layout:

```css
/* Remove or update the .five-cards class */
.pricing-cards {
    grid-template-columns: repeat(4, 1fr);
}
```

---

### Phase 5: HTML Structure Updates

**File:** `src/pages/pricing.astro`

1. **Update title to use serif font:**
   ```html
   <h1 class="pricing-title heading-serif">Simple, transparent pricing</h1>
   ```

2. **Update subtitle text:**
   ```html
   <p class="pricing-intro">OnTarget is free to start and powerful when you're ready to go deeper. Whether you're just exploring or building a long-term plan, you only pay for what you need.</p>
   ```

3. **Remove the Premium card entirely** (lines 63-82 approximately)

4. **Change Professional card class from `dark` to `professional`:**
   ```html
   <div class="pricing-card-v2 professional">
   ```

5. **Update all pricing data attributes and content** to match the exact values from the design

---

### Phase 6: Complete HTML Content Updates

#### Basic Card
```html
<div class="pricing-card-v2">
    <div class="price-badge" data-monthly="0" data-yearly="0">
        <span class="price">$0</span>
        <span class="period">/y</span>
    </div>
    <div class="card-header-row">
        <h3 class="plan-name">Basic</h3>
    </div>
    <p class="plan-description">For exploring your retirement picture and getting oriented.</p>
    <a href="https://app.readyaimretire.com/signup" class="btn-choose-plan">Choose Plan</a>
    <ul class="plan-features">
        <li><i class="fa-solid fa-circle-check"></i> <span>Build a basic retirement plan</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Visualize your financial timeline</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Track net worth at a high level</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Run limited scenarios</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Save your plan for a limited time</span></li>
    </ul>
    <div class="plan-limitations">
        <h4>Limitations</h4>
        <ul>
            <li><i class="fa-solid fa-circle limitation-icon"></i> <span>Limited scenario creation</span></li>
            <li><i class="fa-solid fa-circle limitation-icon"></i> <span>Plan saved for a limited time</span></li>
            <li><i class="fa-solid fa-circle limitation-icon"></i> <span>Premium features locked</span></li>
        </ul>
    </div>
</div>
```

#### Pro Card
```html
<div class="pricing-card-v2">
    <div class="price-badge" data-monthly="12" data-yearly="115">
        <span class="price">$115</span>
        <span class="period">/y</span>
    </div>
    <div class="card-header-row">
        <h3 class="plan-name">Pro</h3>
    </div>
    <p class="plan-description">For those ready to take aim, who want clarity, control, and confidence.</p>
    <a href="https://app.readyaimretire.com/signup" class="btn-choose-plan">Choose Plan</a>
    <h4 class="features-subheading">Everything in Basic, plus:</h4>
    <ul class="plan-features">
        <li><i class="fa-solid fa-circle-check"></i> <span>Save unlimited plans</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Create and compare unlimited scenarios</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Full historical stress testing</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Advanced withdrawal strategy modeling</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Detailed retirement budgeting</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Tax-aware planning across all account types</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Social Security planning tools</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Plan for major life events, expected, and unexpected expenses</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Ongoing updates as your life changes</span></li>
    </ul>
</div>
```

#### Lifetime Card
```html
<div class="pricing-card-v2">
    <div class="price-badge" data-monthly="1199" data-yearly="1199" data-onetime="true">
        <span class="price">$1199</span>
        <span class="period">/y</span>
    </div>
    <div class="card-header-row">
        <h3 class="plan-name">Lifetime</h3>
    </div>
    <p class="plan-description">Get all the great features of Pro with a single one-time payment.</p>
    <a href="https://app.readyaimretire.com/signup" class="btn-choose-plan">Choose Plan</a>
    <ul class="plan-features">
        <li><i class="fa-solid fa-circle-check"></i> <span>Everything in Pro</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>One-time payment</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>No subscriptions</span></li>
    </ul>
</div>
```

#### Professional Card
```html
<div class="pricing-card-v2 professional">
    <div class="price-badge" data-monthly="732" data-yearly="549">
        <span class="price">$549</span>
        <span class="period">/y</span>
    </div>
    <div class="card-header-row">
        <h3 class="plan-name">Professional</h3>
    </div>
    <p class="plan-description">Modern financial planning software for financial advisors and coaches.</p>
    <a href="/advisors" class="btn-choose-plan">Coming Soon</a>
    <ul class="plan-features">
        <li><i class="fa-solid fa-circle-check"></i> <span>Everything in <strong>Premium</strong></span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span><strong>20</strong> Client Seats</span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Plan team <strong>meetings</strong></span></li>
        <li><i class="fa-solid fa-circle-check"></i> <span>Advisor Dashboard</span></li>
    </ul>
</div>
```

---

### Phase 7: Additional CSS for New Elements

**File:** `src/styles/style.css` (or in pricing.astro style block)

```css
/* Limitations section for Basic card */
.plan-limitations {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
}

.plan-limitations h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1a1a2e;
    margin: 0 0 0.75rem 0;
}

.plan-limitations ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.plan-limitations li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.25rem 0;
    font-size: 0.85rem;
    color: #5a6a7a;
}

.limitation-icon {
    color: var(--color-primary) !important;
    font-size: 0.5rem !important;
}

/* Features subheading */
.features-subheading {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1a1a2e;
    margin: 0 0 0.75rem 0;
}
```

---

## Testing Checklist

After implementation, verify the following:

- [ ] Title "Simple, transparent pricing" displays in serif font (Playfair Display)
- [ ] All price badges are half-pill shape (rounded left, flat right)
- [ ] Price badges are flush to top-right corner of cards (no gap)
- [ ] Price badges are wider than before
- [ ] All price badges use teal (#41bab4) background color
- [ ] Only 4 pricing cards display (no Premium card)
- [ ] Pro price shows $115/y (not $99)
- [ ] Subtitle text matches exactly
- [ ] Basic card has Limitations section
- [ ] Pro card has "Everything in Basic, plus:" heading
- [ ] Professional card background is #415776 (slate blue)
- [ ] Professional button says "Coming Soon"
- [ ] All feature lists match the design exactly
- [ ] Responsive layouts work correctly on tablet/mobile
- [ ] Monthly/Annual toggle still functions correctly

---

## Files to Modify

1. `src/styles/style.css` - Add root variables, serif class, update price badge styles
2. `src/pages/pricing.astro` - Update HTML content and remove Premium card

---

## Rollback Plan

If issues arise, changes can be reverted by:
1. Restoring `pricing.astro` from git
2. Restoring `style.css` from git

---

## Notes

- The serif font (`Playfair Display`) is already imported in the project (used in hero section)
- The teal color `#41bab4` is already defined as `--color-primary`
- Consider adding a more descriptive variable name like `--color-teal` as an alias if needed for clarity
