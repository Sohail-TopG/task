
 const Card = ({ name, price, discount_price, id,tag = "", discount_price_perc }) => {
  
    return `
      <li>
        <div class="my-card">
          <div class="card-header">
            <div class="check-wrapper">
              <input type="radio" checked="checked" />
            </div>
            <div class="info-wrapper">
              <div>
                <p class="name">${name}</p>
                <p class="price">DKK ${price.toFixed(2)}</p>
              </div>
              <div>
                <p class="tag">${tag}</p>
                <p class="off-text">${discount_price_perc}% OFF</p>
              </div>
              <p class="discount-price">
                <s> ${discount_price?.toFixed(2) ? 'DKK '+ discount_price?.toFixed(2) : ''}</s>
              </p>
            </div>
          </div>
          <div class="card-main">
            <div class="config-list">
              <div class="cl-row">
                <p class="cl-row-id">
                  <span>#${id}</span>
                </p>
                <div class="cl-select-wrapper">
                  <label for="size-select">Size</label>
                  <select name="size" id="size-select">
                    ${sizeData.map((size) => `<option value="${size.value}">${size.name}</option>`).join("")}
                  </select>
                </div>
                <div class="cl-select-wrapper">
                  <label for="color-select">Color</label>
                  <select name="color" id="color-select">
                    ${colorData.map((color) => `<option value="${color.value}">${color.name}</option>`).join("")}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    `;
  };
  