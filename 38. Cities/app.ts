// Define the function describe_city with a default value for the country parameter
function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); // Since no country is provided, it will use the default value "Default Country"
