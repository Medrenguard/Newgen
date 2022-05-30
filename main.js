// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterByPrice(userRange){
    let result = courses.filter(course => {
        // Приводим границы стоимости курсов со значением null к крайним значениям
        let crsLowBorder = course.prices[0] || 0;
        let crsTopBorder = course.prices[1] || Infinity;
        // Приводим пользовательские границы со значением null к крайним значениям
        let usrLowBorder = userRange[0] || 0;
        let usrTopBorder = userRange[1] || Infinity;
        // Проверяем пересечения границ
        let usrlowBorderHit = usrLowBorder >= crsLowBorder && usrLowBorder <= crsTopBorder;
        let usrtopBorderHit = usrTopBorder >= crsLowBorder && usrTopBorder <= crsTopBorder;

        return usrlowBorderHit || usrtopBorderHit;
    });
    return result;
}

console.log('requiredRange1: ');
console.log(filterByPrice(requiredRange1));
console.log('requiredRange2: ');
console.log(filterByPrice(requiredRange2));
console.log('requiredRange3: ');
console.log(filterByPrice(requiredRange3));