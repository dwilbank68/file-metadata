module.exports = function(app, upload){

    app.get('/', function(req, res){
        res.render('index');
    });

    app.post('/', upload.single('the-file'), function(req,res,next){
        console.log(req.file);
        res.json({
            originalname: req.file.originalname,
            size: req.file.size
        });
    })


};

