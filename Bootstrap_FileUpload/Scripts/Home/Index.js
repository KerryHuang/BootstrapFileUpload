
$(function () {

    //1.初始化input控制項
    var oFileInput = new FileInput();
    oFileInput.Init("txt_file", "/Home/Update");

    //2.註冊導入按鈕的事件
    $("#btn_import").click(function () {
        $("#myModal").modal();
    });
});

//初始化fileinput
var FileInput = function () {
    var oFile = new Object();

    //初始化fileinput控制項（第一次初始化）
    oFile.Init = function (ctrlName, uploadUrl) {
        var control = $('#' + ctrlName);

        //初始化上傳控制項的樣式
        control.fileinput({
            language: 'zh-TW', //設置語言
            uploadUrl: uploadUrl, //上傳的地址
            allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件尾碼
            showUpload: true, //是否顯示上傳按鈕
            showCaption: false,//是否顯示標題
            browseClass: "btn btn-primary", //按鈕樣式     
            //dropZoneEnabled: false,//是否顯示拖拽區域
            //minImageWidth: 50, //圖片的最小寬度
            //minImageHeight: 50,//圖片的最小高度
            //maxImageWidth: 1000,//圖片的最大寬度
            //maxImageHeight: 1000,//圖片的最大高度
            //maxFileSize: 0,//單位為kb，如果為0表示不限制檔大小
            //minFileCount: 0,
            maxFileCount: 100,
            enctype: 'multipart/form-data',
            validateInitialCount: true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",

            msgFilesTooMany: "選擇上傳的檔數量({n}) 超過允許的最大數值{m}！",
        });

        //導入檔上傳完成之後的事件
        $("#txt_file").on("fileuploaded", function (event, data, previewId, index) {
            $("#myModal").modal("hide");
            var data = data.response.lstOrderImport;
            if (data == undefined) {
                //toastr.error('檔案格式類型不正確');
                return;
            }
            //1.初始化表格
            var oTable = new TableInit();
            oTable.Init(data);
            $("#div_startimport").show();
        });
    }
    return oFile;
};
