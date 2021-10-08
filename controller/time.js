import Time from '../models/time';
export const create = (req,res)=>{
    let a = new Time(req.body);
    if(a.thoiGianDi instanceof Date && a.thoiGianDen instanceof Date){
        a.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors: "Khong them duoc loai ve"
            })
        }
        res.json(data)
    }) 
    }
   
}
export const list = (req,res)=>{
    Time.find({})
    .exec((err,data)=>{
        if(err){
            res.status(400).json({
                error:"Khong tim thay thoi gian"
            })
        }
        res.json(data)
    })
}
export const edit = async (req,res)=>{
    const {timeId} = req.params
    const updates = req.body
    const option = {new: true}
    try {
        const edit  = await Time.findByIdAndUpdate({_id:timeId},updates,option)
        res.send(edit)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error:"Khong sua duoc thoi gian"
        })
    }
}
export const remove = async (req,res)=>{
    const {timeId} = req.params
    try {
        const remove = await Time.findByIdAndRemove({_id: timeId})
        res.json({
            remove,
            message: "Xóa thoi gian thành công "
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error:"Khong xoa duoc thoi gian"
        })
    }
}
export const search = (req,res)=>{
    const tgDi= (new Date()).toDateString();
    
    const list  = Time.find({
        thoiGianDi:{$gte:new Date(tgDi)}
    }).exec((err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({
                message:"Khong tim thay thoi gian"
            })
        }
        res.json(data
            )
    })
}