using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bootstrap_FileUpload.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index2()
        {
            return View();
        }


        public JsonResult Update()
        {
            var oFile = Request.Files["txt_file"];

            var oStream = oFile.InputStream;
            //得到了檔的流物件，我們不管是用NPOI、GDI還是直接保存檔都不是問題了吧。。。。

            //後臺TODO

            return Json(new { }, JsonRequestBehavior.AllowGet); 
        }
    }
}