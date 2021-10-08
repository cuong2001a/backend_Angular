import InfoUser from '../models/infoUser';
export const create = (req,res)=>{
    let a = new InfoUser(req.body);
    a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc diem den"
            })
        }
        res.json(data)
    })
}
export const edit = async (req,res)=>{
    const {userId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await InfoUser.findByIdAndUpdate({_id:userId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc thong tin nguoi dung"
        })
    }
}
