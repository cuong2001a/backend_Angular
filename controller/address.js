import Address from '../models/address';
export const create = (req,res)=>{
    let a = new Address(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const findOneAddress = async (req, res) => {
    const { addressId } = req.params
    console.log("ID: ", req.params.addressId)

    try {
        const result = await DiemDen.findById({ _id: addressId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong tim thay diem den"
        })
    }

}
export const edit = async (req,res)=>{
    const {addressId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await Address.findByIdAndUpdate({_id:addressId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc dia chi"
        })
    }
}
export const remove = async (req,res)=>{
    const {addressId} = req.params
    console.log(addressId);
    try {
        const remove = await Address.findByIdAndRemove({_id: addressId})
        res.json({
            remove,
            message: "Xóa địa chỉ thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc dia chi"
        })
    }
}