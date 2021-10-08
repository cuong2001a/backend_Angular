import Desk from '../models/desk';
export const create = (req,res)=>{
    let a = new Desk(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc loai ghe"
            })
        }
        res.json(data)
    })
}
export const findOneAddress = async (req, res) => {
    const { addressId } = req.params
    console.log("ID: ", req.params.addressId)

    try {
        const result = await LoaiVe.findById({ _id: addressId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay loai ve"
        })
    }

}
export const edit = async (req,res)=>{
    const {deskId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await Desk.findByIdAndUpdate({_id:deskId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc ghe"
        })
    }
}
export const remove = async (req,res)=>{
    const {deskId} = req.params
    try {
        const remove = await Desk.findByIdAndRemove({_id: deskId})
        res.json({
            remove,
            message: "Xóa ghe thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc ghe"
        })
    }
}