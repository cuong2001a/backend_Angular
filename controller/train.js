import Train from '../models/train';
export const create = (req,res)=>{
    let a = new Train(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const listRelated = (req, res) => {
    Train.find({})
        .populate("address")
        .populate("time")
        .populate("typeTicket")
        .exec((err, train) => {
            if (err) {
                res.status(400).json({
                    error: "Products not found"
                })
            }
            res.json(train)
        })
}
export const edit = async (req,res)=>{
    const {trainId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await Train.findByIdAndUpdate({_id:trainId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc tau"
        })
    }
}
export const remove = async (req,res)=>{
    const {trainId} = req.params
    try {
        const remove = await Train.findByIdAndRemove({_id: trainId})
        res.json({
            remove,
            message: "Xóa tau thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc tau"
        })
    }
}
export const search = async (req,res)=>{
    // const address = req.query.address? req.query.address : ""
    // const typeTicket = req.query.typeTicket? req.query.typeTicket: ""
    const tgDi =req.query.tgDi? req.query.tgDi:""
    try {
        const list = await Train.find(
            {time:{thoiGianDi:{$gte:new Date("2021-12-09")}}})
        .populate("address")
        .populate("time")
        .populate("typeTicket")
        res.json({
            list
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong tim thay  tau"
        })
    }
}