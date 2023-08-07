
const cardListWrapper = document.querySelector('.bundle-options');

console.log({cardListWrapper})


const generateCardsHTML = (data) => {
    return data.map((item) => Card(item)).join("");
  };
  
  const dummyCardsHTML = generateCardsHTML(dummyData);
  
  cardListWrapper.innerHTML = dummyCardsHTML;
  
  
  
  
  
  