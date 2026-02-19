const foodItem = ['berry', 'cherry', 'mango', 'avocado'];
console.log(foodItem);
console.log(foodItem.length);
console.log(foodItem[1]);
foodItem.push('apple');
foodItem.push('pineapple', 'coconut');
foodItem.pop();
console.log(foodItem);
console.log(foodItem.includes('mango'));
if(foodItem.indexOf('mango') === 2){
    console.log('Yes')
}
const location = ['bogura', 'dhaka', 'chittagong', 'barishal'];
console.log(foodItem.concat(location));
