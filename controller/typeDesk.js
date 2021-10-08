import TypeDesk from '../models/typeDesk';
export const create = (req,res)=>{
    let a = new TypeDesk(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc loai ghe"
            })
        }
        res.json(data)
    })
}
export const list = (req,res)=>{
    TypeDesk.find()
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                errors:"Khong tim thay loai ghe"
            })
        }
        res.json(data)
    })
}
export const edit = async (req,res)=>{
    const {typeDeskId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await TypeDesk.findByIdAndUpdate({_id:typeDeskId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc loai ghe"
        })
    }
}
export const remove = async (req,res)=>{
    const {typeDeskId} = req.params
    try {
        const remove = await TypeDesk.findByIdAndRemove({_id: typeDeskId})
        res.json({
            remove,
            message: "Xóa loai ghe thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc loai ghe"
        })
    }
}