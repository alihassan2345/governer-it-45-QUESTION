// Define the function store_car_info
function store_car_info(manufacturer: string, model: string, ...additionalInfo: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    const carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Store additional information in the carInfo object
    for (const info of additionalInfo) {
        for (const key in info) {
            carInfo[key] = info[key];
        }
    }

    return carInfo;
}

// Call the function with required information and additional name-value pairs
const carDetails = store_car_info("Toyota", "Camry",  ["blue"] ,  ["Sunroof", "Navigation"]);

// Print the returned object to check if all information was stored correctly
console.log(carDetails);
