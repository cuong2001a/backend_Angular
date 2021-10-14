import TrainCar from '../models/trainCar';
export const create = (req,res)=>{
    let a = new TrainCar(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const list = (req, res) => {
    TrainCar.find({})
    .populate({path:'train',
    populate:{path:"addressGo",path:"addressArrival"}})
        .exec((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Products not found"
                })
            }
            res.json(data)
        })
}
export const edit = async (req,res)=>{
    const {trainCarId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await TrainCar.findByIdAndUpdate({_id:trainCarId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc toa tau"
        })
    }
}
export const remove = async (req,res)=>{
    const {trainCarId} = req.params
    try {
        const remove = await TrainCar.findByIdAndRemove({_id: trainCarId})
        res.json({
            remove,
            message: "Xóa toa tau thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc toa tau"
        })
    }
}