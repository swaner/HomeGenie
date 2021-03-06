//
// namespace : HG.Automation.Groups namespace
// info      : -
//
HG.Automation = HG.Automation || {};
//
HG.Automation.Groups = HG.Automation.Groups || {};
HG.Automation.Groups.LightsOff = function (group) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Groups.LightsOff/' + group + '/',
        type: 'GET'
    });
};
HG.Automation.Groups.LightsOn = function (group) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Groups.LightsOn/' + group + '/',
        type: 'GET'
    });
};
//

//
// namespace : HG.Automation.Macro namespace
// info      : -
//
HG.Automation.Macro = HG.Automation.Macro || {};
HG.Automation.Macro.Record = function () {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Macro.Record/',
        type: 'GET'
    });
};
//
HG.Automation.Macro.Save = function (mode, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Macro.Save/' + mode + '/',
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            callback(data);
        }
    });
};
//
HG.Automation.Macro.Discard = function () {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Macro.Discard/',
        type: 'GET'
    });
};
//
HG.Automation.Macro.SetDelay = function (type, args) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Macro.SetDelay/' + type + '/' + args,
        type: 'GET'
    });
};

HG.Automation.Macro.GetDelay = function (callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Macro.GetDelay/',
        type: 'GET',
        success: function (data) {
            callback(data);
        },
        error: function(xhr, status, error) {
            console.log('HG.Automation.Macro.GetDelay ERROR: '+xhr.status+':'+xhr.statusText);
            callback();
        }
    });
};


//
// namespace : HG.Automation.Programs namespace
// info      : -
//
HG.Automation.Programs = HG.Automation.Programs || {};
HG.Automation.Programs.List = function (callback) {
    $.get('/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.List/', function (data) {
        HG.WebApp.Data.Programs = eval(arguments[2].responseText);
        callback();
    });
};
HG.Automation.Programs.AddProgram = function (group, program, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Add/' + group + '/',
        type: 'POST',
        data: program,
        success: function (data) {
            if (typeof data.ResponseValue != 'undefined')
                data = data.ResponseValue;
            callback(data);
        },
        error: function (a, b, c) {
            alert('A problem ocurred');
        }
    });
};
HG.Automation.Programs.DeleteProgram = function (program, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Delete/' + program + '/',
        type: 'GET',
        success: function (response) {
            callback();
        },
        error: function (a, b, c) {
            alert('A problem ocurred');
        }
    });
};

HG.Automation.Programs.Run = function (pid, options, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Run/' + pid + '/' + options,
        type: 'GET',
        success: function (response) {
            if (typeof callback != 'undefined') callback(response);
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.Toggle = function (pid, options, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Toggle/' + pid + '/' + options,
        type: 'GET',
        success: function (response) {
            if (typeof callback != 'undefined') callback(response);
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.ArduinoFileLoad = function (pid, filename, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Arduino.FileLoad/' + pid + '/' + filename,
        type: 'GET',
        success: function (data) {
            if (typeof data.ResponseValue != 'undefined')
                data = data.ResponseValue;
            if (typeof callback != 'undefined') callback(unescape(data));
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.ArduinoFileAdd = function (pid, filename, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Arduino.FileAdd/' + pid + '/' + filename,
        type: 'GET',
        success: function (data) {
            if (typeof data.ResponseValue != 'undefined')
                data = data.ResponseValue;
            if (typeof callback != 'undefined') callback(unescape(data));
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.ArduinoFileDelete = function (pid, filename, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Arduino.FileDelete/' + pid + '/' + filename,
        type: 'GET',
        success: function (data) {
            if (typeof data.ResponseValue != 'undefined')
                data = data.ResponseValue;
            if (typeof callback != 'undefined') callback(unescape(data));
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.ArduinoFileSave = function (pid, filename, srctext, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Arduino.FileSave/' + pid + '/' + filename,
        type: 'POST',
        data: srctext,
        success: function (data) {
            if (typeof data.ResponseValue != 'undefined')
                data = data.ResponseValue;
            if (typeof callback != 'undefined') callback(unescape(data));
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.ArduinoFileList = function (pid, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Programs.Arduino.FileList/' + pid,
        type: 'GET',
        success: function (data) {
            if (typeof callback != 'undefined')
                callback(data);
        },
        error: function (a, b, c) {
            if (typeof callback != 'undefined') callback(null);
        }
    });
};

HG.Automation.Programs.PostBack = function(postbackId, program, module, property, value, callback) {
    $.get('/' + HG.WebApp.Data.ServiceKey + '/' + program.Domain + '/' + program.Address + '/' + postbackId + '/' + module.Domain + '/' + module.Address + '/' + property + '/' + encodeURIComponent(value) + '/', function (data) {
        if (typeof callback != 'undefined') {
            callback(data);
        }
    }).fail(function () {
        if (typeof (callback) != 'undefined') callback(null);
    });
};

//
// namespace : HG.Automation.Scheduling namespace
// info      : -
//	
HG.Automation.Scheduling = HG.Automation.Scheduling || {};
HG.Automation.Scheduling.Update = function (name, expression, pid, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Scheduling.Update/' + name + '/' + expression.replace(/\//g, '|') + '/' + pid,
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            if (typeof callback != 'undefined')
                callback(data);
        }
    });
};
HG.Automation.Scheduling.Delete = function (name, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Scheduling.Delete/' + name,
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            if (typeof callback != 'undefined')
                callback(data);
        }
    });
};
HG.Automation.Scheduling.Enable = function (name, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Scheduling.Enable/' + name,
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            if (typeof callback != 'undefined')
                callback(data);
        }
    });
};
HG.Automation.Scheduling.Disable = function (name, callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Scheduling.Disable/' + name,
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            if (typeof callback != 'undefined')
                callback(data);
        }
    });
};
HG.Automation.Scheduling.List = function (callback) {
    $.ajax({
        url: '/' + HG.WebApp.Data.ServiceKey + '/' + HG.WebApp.Data.ServiceDomain + '/Automation/Scheduling.List/',
        type: 'GET',
        success: function (data) {
            if (typeof callback != 'undefined')
                callback(data);
        }
    });
};