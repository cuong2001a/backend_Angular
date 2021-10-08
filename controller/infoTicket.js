import InfoTicket from '../models/infoTicket';
export const create = (req,res)=>{
    let a = new InfoTicket(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc ve"
            })
        }
        res.json(data)
    })
}
export const edit = async (req,res)=>{
    const {infoTicketId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await InfoTicket.findByIdAndUpdate({_id:infoTicketId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc thong tin  ve"
        })
    }
}
export const remove = async (req,res)=>{
    const {infoTicketId} = req.params
    try {
        const remove = await InfoTicket.findByIdAndRemove({_id: infoTicketId})
        res.json({
            remove,
            message: "Xóa thong tin ve thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc thong tin ve"
        })
    }
}
// export const search = async (req,res)=>{
//     const id = req.query.id? req.query.id: ""
//     const phoneNumber = req.query.phoneNumber? req.query.phoneNumber: null
//     const email = req.query.email? req.query.email: ""
//     try {
//         const result = await InfoTicket.find({"_id":id,""})
//     } catch (error) {
        
//     }
// }