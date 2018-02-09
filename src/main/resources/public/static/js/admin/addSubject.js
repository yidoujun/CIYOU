/**
 * ajax 添加科目
 */
$(function () {

    $('#addSubject').click(function () {
         if (!validAddSubject()) {
            return;
        }
        $.ajax({
            type: 'POST',
            url: 'addSubject',
            cache: false,
            data: {
                subjectName: $.trim($("#addSubjectName").val())
            },
            success: function (data) {
                $("#addModal").modal("hide");//关闭模糊框
                showInfo(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                showInfo("提交失败，请重试");
            }
        });

		
	});
	
		$('#modal_info').on('hide.bs.modal',function() {//提示模糊框隐藏时候触发
       		 location.reload();  	//刷新当前页面
    	});
	
	

});



function validAddSubject() {
    var flag = true;

    var subjectName = $.trim($("#addSubjectName").val());
    if (subjectName == "") {
        $('#addSubjectName').parent().addClass("has-error");
        $('#addSubjectName').next().html("<i class='fa fa-times-circle-o'></i>    请输入科目");
        $("#addSubjectName").next().show();
        flag = false;
    }else {
        $('#addSubjectName').parent().removeClass("has-error");
        $('#addSubjectName').next().text("");
        $("#addSubjectName").next().hide();
    }

    return flag;
}






function showInfo(msg) {
    $("#div_info").text(msg);
    $("#modal_info").modal('show');
}


