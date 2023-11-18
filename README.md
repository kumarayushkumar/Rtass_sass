# Sassay

Simple and flexible Sass framework.

Import it and modify it to your needs.

## Usage

Import sassay in your main file

```scss
@import '../../node_modules/sassay/scss/sassay.base.scss';
```

## Custom style

We recommend you creating a _custom.scss file where you can overwrite the variables and import sassay.

**Check sassay/scss/absracts/_variables.scss**

```scss
$primary: #fff;
// More variables

@import '../../node_modules/sassay/scss/sassay.base.scss';
```

## Spacing

- **`p-[size]`**: Padding in all direction
- **`px-[size]`**: Horizontal padding
- **`py-[size]`**: Vertical padding
- **`pl-[size]`**: Left padding
- **`pr-[size]`**: Right padding
- **`pt-[size]`**: Top padding
- **`pb-[size]`**: Bottom padding
- **`m-[size]`**: Margin in all direction
- `m**x-[size]**`: Horizontal margin
- `m**y-[size]**`: Vertical margin
- `m**l-[size]**`: Left margin
- `m**r-[size]**`: Right margin
- `m**t-[size]**`: Top margin
- `m**b-[size]**`: Bottom margin

Sizes available: **`0`**, **`xs`**, **`s`**, **`m`**, **`l`**, **`xl`**, **`xxl`**.

```html
<p class="p-xs">Html</p>
```

```css
padding: 0 0.25; 
/* 0.25 because the $base-padding = $base-size = 1rem and $multi-xs = 0.25;
```

## **Typography**

### **Font Sizes**

- **`.fs-xs`**: Extra-small font size
- **`.fs-s`**: Small font size
- **`.fs-m`**: Medium font size
- **`.fs-l`**: Large font size
- **`.fs-xl`**: Extra-large font size
- **`.fs-xxl`**: Larger than extra-large font size
- **`.fs-xxxl`**: Largest font size

### **Font Weights**

- **`.fw-n`**: Normal font weight
- **`.fw-b`**: Bold font weight
- **`.fw-l`**: Lighter font weight
- **`.fw-bd`**: Bolder font weight
- **`.fw-1` to `.fw-9`**: Numeric font weights from 100 to 900

## **Display**

### **Display Property Options**

- **`.d-n`**: Display none
- **`.d-b`**: Display block
- **`.d-ib`**: Display inline-block
- **`.d-i`**: Display inline
- **`.d-f`**: Display flex
- **`.d-if`**: Display inline-flex
- **`.d-g`**: Display grid
- **`.d-ig`**: Display inline-grid

### **Flexbox Container Direction**

- **`.f-r`**: Flex container with a row direction
- **`.f-rr`**: Flex container with a row-reverse direction
- **`.f-c`**: Flex container with a column direction
- **`.f-cr`**: Flex container with a column-reverse direction

```html
<div class="d-f f-r">This div has flex display with a row direction.</div>
<span class="d-ib">This span has inline-block display.</span>
<section class="d-g">This section has grid display.</section>
```

### **Flexbox and Grid Alignment**

- **`.jc-start`**: Justify content start
- **`.ai-start`**: Align items start
- **`.ac-start`**: Align content start
- **`.jc-center`**: Justify content center
- **`.ai-center`**: Align items center
- **`.ac-center`**: Align content center
- **`.jc-space-between`**: Justify content space between
- **`.ai-space-between`**: Align items space between
- **`.ac-space-between`**: Align content space between
- **`.jc-space-around`**: Justify content space around
- **`.ai-space-around`**: Align items space around
- **`.ac-space-around`**: Align content space around
- **`.jc-space-evenly`**: Justify content space evenly
- **`.ai-space-evenly`**: Align items space evenly
- **`.ac-space-evenly`**: Align content space evenly
- **`.jc-flex-start`**: Justify content flex-start
- **`.ai-flex-start`**: Align items flex-start
- **`.ac-flex-start`**: Align content flex-start
- **`.jc-flex-end`**: Justify content flex-end
- **`.ai-flex-end`**: Align items flex-end
- **`.ac-flex-end`**: Align content flex-end

```html
<div class="d-f jst-cnt-center align-items-flex-end">This div has flex display, centered content, and items aligned to the end.</div>
<section class="d-g jst-cnt-space-around">This section has grid display with space-around justification.</section>
```

## **Layout**

The layout classes in **Your Sass Framework** are designed to provide a structured and responsive foundation for building web layouts. Each class follows a naming convention of **`[property]-[value]`**.

### **Container**

The container class sets the width, maximum width, margin, and padding for the main content container.

- **`.container`**: Container with a width of 80%, maximum width of 1400px, and 1rem padding in horizontal direction.

```html
<div class="container">
  <!-- Your content goes here -->
</div>
```

- **`.container-fluid`**: Full-width container with 1rem padding in horizontal direction.

```html
<div class="container-fluid">
  <!-- Your full-width content goes here -->
</div>
```

### **Rows and Columns**

Rows and columns are used to create flexible and responsive layouts.

- **`.row`**: Flex container with a row wrap, used to create rows of columns.

```html
<div class="row">
  <div class="col-6">Column 1</div>
  <div class="col-6">Column 2</div>
</div>
```

- **Column Classes**: Columns are based on a 12-column grid system. Use these classes to define the width of your columns.

```html
<div class="col-6">This column takes up half the width</div>
```

### **Gaps**

Control the spacing between elements using gap classes.

- **`.gap-0`**: No padding between elements.
- **`.gap-1`**: 10px padding between elements.
- **`.gap-2`**: 20px padding between elements.
- **`.gap-3`**: 30px padding between elements.

```html
<div class="row gap-2">
  <div class="col-4">Column 1</div>
  <div class="col-4">Column 2</div>
  <div class="col-4">Column 3</div>
</div>
```

### **Responsive Columns**

Define column widths based on screen size using responsive classes.

- **`.col-[size]-[viewport]`**: Define column width for a specific viewport.

```html
<div class="col-6-xs col-4-md col-3-lg">Responsive Columns</div>
```