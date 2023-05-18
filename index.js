const categoryList = ['vegetables', 'fruits'];
const vegetablesList = ['cabbage', 'avocado', 'tomato'];
const fruitsList = ['grapes', 'raspberry', 'coconut'];
const vegetablesPrices = [8, 30, 10];
const fruitsPrices = [20, 25, 50];

do {
    period = prompt('Enter period: winter or summer.').replaceAll(' ', '').toLowerCase();
} while (period !== 'winter' && period !== 'summer');

switch (period) {
    case 'winter':
        coefficient = 2;
        break;
    case 'summer':
        coefficient = 0.8;
        break;
}

do {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits.').replaceAll(' ', '').toLowerCase();
} while (!categoryList.includes(category));

switch (category) {
    case 'vegetables':
        do {
            product = prompt('Choose product from category vegetables: cabbage, avocado or tomato.').replaceAll(' ', '').toLowerCase();
            const vegetableType = vegetablesList.indexOf(product);
            priceOfProduct = vegetablesPrices[vegetableType];
        } while (!vegetablesList.includes(product));
        break;
    case 'fruits':
        do {
            product = prompt('Choose product from category fruits: grapes, raspberry or coconut.').replaceAll(' ', '').toLowerCase();
            const fruitType = fruitsList.indexOf(product);
            priceOfProduct = fruitsPrices[fruitType];
        } while (!fruitsList.includes(product));
        break;
}

do {
    countOfProduct = parseInt(prompt(`Enter count of ${product}`).replaceAll(' ', ''));
} while (isNaN(countOfProduct) || countOfProduct <= 1);

finalSum = countOfProduct * coefficient * priceOfProduct;

const productImg = `<img src='images/${category}/${product}.svg' alt='${product}' width='100' height='100' />`;

document.write(`
    <div class='product' align='center'>
        ${productImg}
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${countOfProduct}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalSum} UAH</b></p>
    </div>
`);
