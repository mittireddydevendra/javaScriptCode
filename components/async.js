async function processUser(userId){
    try{
        const user =await getUser(userId);
        const order = await getOrders(user.id);
        await processOrders(orders);
        console.log('All done!');
    }catch(err){
        console.log('Error reading files:',err)
    }
}

async function fetchAllData(){
    try{
        const [users, products, orders] = await Promise.all([
            UserActivation.find(),
            Product.find(),
            Order.find()
        ]);
        return {users, products, orders};
    }catch (error){
        console.log('Error fetch data:', error);
        throw error;
    }
}