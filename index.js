const finalDate= (days)=>{
    cost addDays= require("date-fns/addDays");
    const result= addDays(new Date("22-08-2020", days));
    return result;
}
export default finalDate