(function (e) {
    function t(t) {
        for (var i, r, s = t[0], c = t[1], d = t[2], l = 0, u = []; l < s.length; l++) r = s[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]), o[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        m && m(t);
        while (u.length) u.shift()();
        return n.push.apply(n, d || []), a()
    }

    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], i = !0, r = 1; r < a.length; r++) {
                var s = a[r];
                0 !== o[s] && (i = !1)
            }
            i && (n.splice(t--, 1), e = c(c.s = a[0]))
        }
        return e
    }
    var i = {},
        r = {
            app: 0
        },
        o = {
            app: 0
        },
        n = [];

    function s(e) {
        return c.p + "js/" + ({
            404: "404",
            "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start": "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start",
            login: "login",
            start: "start",
            "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d": "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d",
            "cameras~console~dashboard~notifications~recordings~settings": "cameras~console~dashboard~notifications~recordings~settings",
            "camera~cameraFeed~cameras~camview~dashboard": "camera~cameraFeed~cameras~camview~dashboard",
            cameras: "cameras",
            dashboard: "dashboard",
            console: "console",
            "notifications~recordings~settings": "notifications~recordings~settings",
            notifications: "notifications",
            recordings: "recordings",
            settings: "settings",
            plugins: "plugins",
            camera: "camera",
            cameraFeed: "cameraFeed",
            camview: "camview",
            config: "config",
            utilization: "utilization"
        } [e] || e) + "." + {
            404: "823920f1",
            "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start": "985bc638",
            login: "26006451",
            start: "e95646d4",
            "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d": "6997d2d1",
            "cameras~console~dashboard~notifications~recordings~settings": "e621d84a",
            "camera~cameraFeed~cameras~camview~dashboard": "240f7a01",
            cameras: "a8a85a04",
            dashboard: "01450e2c",
            console: "81d9a384",
            "notifications~recordings~settings": "5c05ec14",
            notifications: "909b381a",
            recordings: "a5577d49",
            settings: "ef8cec63",
            plugins: "03ec6c9f",
            camera: "53515895",
            cameraFeed: "b4ce4ca1",
            camview: "ceb050b8",
            config: "6bd15e18",
            utilization: "0b671abd"
        } [e] + ".js"
    }

    function c(t) {
        if (i[t]) return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }
    c.e = function (e) {
        var t = [],
            a = {
                404: 1,
                "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start": 1,
                login: 1,
                start: 1,
                "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d": 1,
                "cameras~console~dashboard~notifications~recordings~settings": 1,
                "camera~cameraFeed~cameras~camview~dashboard": 1,
                cameras: 1,
                dashboard: 1,
                console: 1,
                "notifications~recordings~settings": 1,
                notifications: 1,
                recordings: 1,
                settings: 1,
                plugins: 1,
                camera: 1,
                camview: 1,
                config: 1,
                utilization: 1
            };
        r[e] ? t.push(r[e]) : 0 !== r[e] && a[e] && t.push(r[e] = new Promise((function (t, a) {
            for (var i = "css/" + ({
                    404: "404",
                    "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start": "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start",
                    login: "login",
                    start: "start",
                    "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d": "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d",
                    "cameras~console~dashboard~notifications~recordings~settings": "cameras~console~dashboard~notifications~recordings~settings",
                    "camera~cameraFeed~cameras~camview~dashboard": "camera~cameraFeed~cameras~camview~dashboard",
                    cameras: "cameras",
                    dashboard: "dashboard",
                    console: "console",
                    "notifications~recordings~settings": "notifications~recordings~settings",
                    notifications: "notifications",
                    recordings: "recordings",
                    settings: "settings",
                    plugins: "plugins",
                    camera: "camera",
                    cameraFeed: "cameraFeed",
                    camview: "camview",
                    config: "config",
                    utilization: "utilization"
                } [e] || e) + "." + {
                    404: "f02769ca",
                    "cameras~console~dashboard~login~notifications~plugins~recordings~settings~start": "114be4f0",
                    login: "bafe4525",
                    start: "d0a2e73b",
                    "camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d": "3bdd1c1d",
                    "cameras~console~dashboard~notifications~recordings~settings": "2346977c",
                    "camera~cameraFeed~cameras~camview~dashboard": "1d916225",
                    cameras: "34266bc4",
                    dashboard: "9c6cbcf0",
                    console: "c1d6b63d",
                    "notifications~recordings~settings": "51e80009",
                    notifications: "fca4fadd",
                    recordings: "1f6d4901",
                    settings: "74a79772",
                    plugins: "ea2f3145",
                    camera: "5bb2acb9",
                    cameraFeed: "31d6cfe0",
                    camview: "3a275a80",
                    config: "45465b2c",
                    utilization: "71df2456"
                } [e] + ".css", o = c.p + i, n = document.getElementsByTagName("link"), s = 0; s < n.length; s++) {
                var d = n[s],
                    l = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (l === i || l === o)) return t()
            }
            var u = document.getElementsByTagName("style");
            for (s = 0; s < u.length; s++) {
                d = u[s], l = d.getAttribute("data-href");
                if (l === i || l === o) return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
                var i = t && t.target && t.target.src || o,
                    n = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                n.code = "CSS_CHUNK_LOAD_FAILED", n.request = i, delete r[e], m.parentNode.removeChild(m), a(n)
            }, m.href = o;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(m)
        })).then((function () {
            r[e] = 0
        })));
        var i = o[e];
        if (0 !== i)
            if (i) t.push(i[2]);
            else {
                var n = new Promise((function (t, a) {
                    i = o[e] = [t, a]
                }));
                t.push(i[2] = n);
                var d, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = s(e);
                var u = new Error;
                d = function (t) {
                    l.onerror = l.onload = null, clearTimeout(m);
                    var a = o[e];
                    if (0 !== a) {
                        if (a) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")", u.name = "ChunkLoadError", u.type = i, u.request = r, a[1](u)
                        }
                        o[e] = void 0
                    }
                };
                var m = setTimeout((function () {
                    d({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = d, document.head.appendChild(l)
            } return Promise.all(t)
    }, c.m = e, c.c = i, c.d = function (e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) c.d(a, i, function (t) {
                return e[t]
            }.bind(null, i));
        return a
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/", c.oe = function (e) {
        throw console.error(e), e
    };
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = d.push.bind(d);
    d.push = t, d = d.slice();
    for (var u = 0; u < d.length; u++) t(d[u]);
    var m = l;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    },
    "02a3": function (e, t, a) {
        e.exports = a.p + "img/no_user.bf60d51b.png"
    },
    "034f": function (e, t, a) {
        "use strict";
        a("85ec")
    },
    "12cb": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return g
        })), a.d(t, "c", (function () {
            return m
        })), a.d(t, "d", (function () {
            return l
        })), a.d(t, "b", (function () {
            return c
        }));
        a("7db0"), a("d3b7");
        var i = a("2b0e"),
            r = a("a925"),
            o = {
                af: "af",
                sq: "sq",
                ar: "ar",
                "ar-dz": "ar",
                "ar-bh": "ar",
                "ar-eg": "ar",
                "ar-iq": "ar",
                "ar-jo": "ar",
                "ar-kw": "ar",
                "ar-lb": "ar",
                "ar-ly": "ar",
                "ar-ma": "ar",
                "ar-om": "ar",
                "ar-qa": "ar",
                "ar-sa": "ar",
                "ar-sy": "ar",
                "ar-tn": "ar",
                "ar-ae": "ar",
                "ar-ye": "ar",
                hy: "hy",
                as: "as",
                ast: "at",
                az: "az",
                eu: "eu",
                be: "be",
                bn: "bn",
                bs: "bs",
                br: "br",
                bg: "bg",
                my: "my",
                ca: "ca",
                ch: "ch",
                ce: "ce",
                zh: "zh",
                "zh-hk": "zh",
                "zh-cn": "zh",
                "zh-sg": "zh",
                "zh-tw": "zh",
                cv: "cv",
                co: "co",
                cr: "cr",
                hr: "hr",
                cs: "cs",
                da: "da",
                nl: "nl",
                "nl-be": "nl",
                en: "en",
                "en-au": "en",
                "en-bz": "en",
                "en-ca": "en",
                "en-ie": "en",
                "en-jm": "en",
                "en-nz": "en",
                "en-ph": "en",
                "en-za": "en",
                "en-tt": "en",
                "en-gb": "en",
                "en-us": "en",
                "en-zw": "en",
                eo: "eo",
                et: "et",
                fo: "fo",
                fa: "fa",
                fj: "fj",
                fi: "fi",
                fr: "fr",
                "fr-be": "fr",
                "fr-ca": "fr",
                "fr-fr": "fr",
                "fr-lu": "fr",
                "fr-mc": "fr",
                "fr-ch": "fr",
                fy: "fy",
                fur: "fu",
                gd: "gd",
                "gd-ie": "gd",
                gl: "gl",
                ka: "ka",
                de: "de",
                "de-at": "de",
                "de-de": "de",
                "de-li": "de",
                "de-lu": "de",
                "de-ch": "de",
                el: "el",
                gu: "gu",
                ht: "ht",
                he: "he",
                hi: "hi",
                hu: "hu",
                is: "is",
                id: "id",
                iu: "iu",
                ga: "ga",
                it: "it",
                "it-ch": "it",
                ja: "ja",
                kn: "kn",
                ks: "ks",
                kk: "kk",
                km: "km",
                ky: "ky",
                tlh: "tl",
                ko: "ko",
                "ko-kp": "ko",
                "ko-kr": "ko",
                la: "la",
                lv: "lv",
                lt: "lt",
                lb: "lb",
                mk: "mk",
                ms: "ms",
                ml: "ml",
                mt: "mt",
                mi: "mi",
                mr: "mr",
                mo: "mo",
                nv: "nv",
                ng: "ng",
                ne: "ne",
                no: "no",
                nb: "nb",
                nn: "nn",
                oc: "oc",
                or: "or",
                om: "om",
                "fa-ir": "fa",
                pl: "pl",
                pt: "pt",
                "pt-br": "pt",
                pa: "pa",
                "pa-in": "pa",
                "pa-pk": "pa",
                qu: "qu",
                rm: "rm",
                ro: "ro",
                "ro-mo": "ro",
                ru: "ru",
                "ru-mo": "ru",
                sz: "sz",
                sg: "sg",
                sa: "sa",
                sc: "sc",
                sd: "sd",
                si: "si",
                sr: "sr",
                sk: "sk",
                sl: "sl",
                so: "so",
                sb: "sb",
                es: "es",
                "es-ar": "es",
                "es-bo": "es",
                "es-cl": "es",
                "es-co": "es",
                "es-cr": "es",
                "es-do": "es",
                "es-ec": "es",
                "es-sv": "es",
                "es-gt": "es",
                "es-hn": "es",
                "es-mx": "es",
                "es-ni": "es",
                "es-pa": "es",
                "es-py": "es",
                "es-pe": "es",
                "es-pr": "es",
                "es-es": "es",
                "es-uy": "es",
                "es-ve": "es",
                sx: "sx",
                sw: "sw",
                sv: "sv",
                "sv-fi": "sv",
                "sv-sv": "sv",
                ta: "ta",
                tt: "tt",
                te: "te",
                th: "th",
                tig: "ti",
                ts: "ts",
                tn: "tn",
                tr: "tr",
                tk: "tk",
                uk: "uk",
                hsb: "hs",
                ur: "ur",
                ve: "ve",
                vi: "vi",
                vo: "vo",
                wa: "wa",
                cy: "cy",
                xh: "xh",
                ji: "ji",
                zu: "zu"
            },
            n = o,
            s = "fa",
            c = {
                de: "German (de)",
                nl: "Dutch (nl)",
                en: "English (en)",
                fr: "French (fr)",
                fa: "prersian (fa)",
                es: "Spanish (es)"
            },
            d = ["de", "nl", "en", "fr", "fa", "es"],
            l = function (e) {
                if (!e) return s;
                switch (e) {
                    case d.find((function (t) {
                        return t === e
                    })):
                        return e;
                    default:
                        return s
                }
            },
            u = function (e) {
                return e && "" !== e || !window.navigator || !window.navigator.language ? l(e && "" !== e ? n[e.toLowerCase()] : "en") : l(n[window.navigator.language.toLowerCase()])
            },
            m = function (e) {
                return a("a537")("./".concat(u(e), ".json"))
            },
            f = u();
        i["a"].use(r["a"]);
        var g = new r["a"]({
            locale: f,
            messages: m(f)
        })
    },
    "15a2": function (e) {
        e.exports = JSON.parse('{"de":{"account":"Konto","account_nav_info":"Verwalten Sie Ihre Daten wie Ihren Benutzernamen und Passwort","active":"Aktiv","add":"Hinzufügen","add_camera":"Kamera hinzufügen","add_labels":"Label hinzufügen","add_new_camera":"Neue Kamera hinzufügen","add_new_user":"Neuen Benutzer hinzufügen","add_to_homescreen":"Zum Startbildschirm hinzufügen","admin":"Administrator","alarm":"Alarm","alarm_ftp_info":"FTP Server muss aktiv sein um eine Bewegung durch das Hochladen einer Datei zu triggern!","alarm_http_info":"HTTP Server muss aktiv sein um eine Bewegung durch ein Link zu triggern!","alarm_http_reset_info":"HTTP Server muss aktiv sein um eine Bewegung durch ein Link zu resetten!","alarm_smtp_info":"SMTP Server muss aktiv sein um eine Bewegung durch Email zu triggern!","alexa":"Alexa","all":"Alle","all_notifications_removed":"Alle Benachrichtigungen wurden gelöscht","all_recordings_removed":"Alle Aufnahmen wurden gelöscht","amazon_rekognition":"Amazon Rekognition","analyze_duration":"Analysezeit","analyze_duration_info":"Specify how many microseconds are analyzed to probe the input. A higher value will enable detecting more accurate information, but will increase latency. It defaults to 5,000,000 microseconds = 5 seconds (-analyzeduration).","appearance":"Erscheinungsbild","appearance_nav_info":"Ändern Sie die Sprache oder das Aussehen des Interfaces","apply":"Übernehmen","april":"April","at_home":"Zu Hause","at_home_switch":"Zu Hause Schalter","atleast_one_permission_required":"Mindestens eine Berechtigung muss ausgewählt sein","audio":"Audio","audio_codec":"Audio Codec","audio_codec_info":"Set the codec used for encoding audio sent to HomeKit for HSV, must be AAC-based (-acodec).","audio_codec_info_hksv":"Set the codec used for encoding audio for HKSV, must be AAC-based (-acodec).","audio_info":"Enables audio streaming from camera.","audio_info_hksv":"Enables audio for HKSV recordings.","august":"August","auto":"Auto","auto_darkmode":"Auto Darkmode","automated_backup":"Automatisiertes Backup","automation":"Automation","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_contingent_left":"Kontingent Übrig","aws_contingent_total":"Kontingent Total","aws_last_rekognition":"Letzte Rekognition","aws_region":"Region","aws_secret_access_key":"Secret Access Key","back":"Zurück","backup":"Backup","backup_and_restore":"Sichern & Wiederherstellen","backup_download":"Backup herunterladen","backup_file":"Backup Datei","backup_info_download":"Laden Sie ein Sicherungsarchiv Ihrer gesamten camera.ui Umgebung herunter. Dadurch wird der gesamte Inhalt (einschließlich der Aufnahmen) Ihres camera.ui-Speicherverzeichnisses gesichert. Diesen können Sie später auf jeder Plattform wiederherstellen auf der camera.ui läuft","backup_info_restore":"Stellen Sie ein Sicherungsarchiv wieder her, das Sie zuvor mit camera.ui erstellt haben. Ihre camera.ui-Konfiguration, Datenbank, Aufnahmen und camera.ui-Benutzerkonten werden wiederhergestellt","backup_info_shedule":"Eine vollständige Sicherung der camera.ui-Datenbank wird automatisch jeden Tag um 12:00:00 Uhr erstellt und 7 Tage lang aufbewahrt.","backup_nav_info":"Erstellen und Verwalten Sie die Sicherungskopien vom Interface","backup_restore":"Backup wiederherstellen","backup_restored":"Backup wurde wiederhergestellt","backup_shedule":"Backup Zeitplan","banner_text_doorbell":"Türklingel wurde geläutet","banner_text_motion":"Neue Bewegung entdeckt","base":"Basis","bitrate":"Bitrate","bitrate_info":"The bitrate used for video stream.","bitrate_info_hksv":"The maximum bitrate used HKSV, in kbit/s. If not set, will use any bitrate HomeKit requests (-b:v).","blgray":"Blau Grau","blue":"Blau","blue_gray":"Blau Grau","brown":"Braun","browse":"Durchsuchen","camera":"Kamera","camera_alarm_info":"Einstellungen für Bewegungserkennung","camera_already_exists":"Kamera existiert bereits","camera_ffmpeg_stream_info":"FFmpeg und Stream Konfiguration","camera_homebridge_info":"Kamera Homebridge Einstellung","camera_interface_info":"Kamera Interface Einstellung","camera_notification_info":"Kamera Benachrichtigungseinstellung","camera_player_info":"Interface Video Player Parameter","camera_prebuffering_info":"Kamera Stream Vorpuffern","camera_rekognition_info":"Bildanalyse beim Erkennen von Bewegung","camera_settings_save_info":"Mit (¹) markierte Felder können nur durch Anklicken der Schaltfläche \\"✓\\" gespeichert werden","camera_videoanalysis_info":"camera.ui Bewegungserkennungssystem","cameras":"Kameras","cameras_nav_info":"Verwalten Sie die Streaming Parameter der Kameras","cameras_to_exclude_from_athome":"Kameras zum Ausschließen von \'Zu Hause\'","camview":"Camview","cancel":"Abbrechen","cannot_change_pw":"Passwort kann nicht geändert werden","cannot_login":"Benutzername und/oder Passwort sind falsch","change":"Ändern","change_your_password":"Ändern Sie Ihren Passwort","charts":"Diagramme","chat_id":"Chat ID","clear":"Löschen","close":"Schließen","color":"Farbe","confidence":"Zuversichtlichkeit","config":"Konfiguration","config_information":"config.json","config_was_saved":"Konfiguration wurde gespeichert","connected":"Verbunden","console":"Konsole","cpu_load":"CPU Auslastung","cpu_temperature":"CPU Temperatur","create_zipped_backup_file":"Erstellen einer gezippten Sicherungsdatei","custom":"Benutzerdefiniert","dark":"Dunkel","darkmode":"Darkmode","dashboard":"Dashboard","database":"Datenbank","database_information":"Datenbank Information","database_resetted":"Datenbank wurde zurückgesetzt","day":"Tag","days":"Tage","debug":"Debug","debug_info":"Includes debugging output from the main FFmpeg process in the log.","december":"Dezember","disable_info":"Disables the camera and removes it from HomeKit.","disabled":"Deaktiviert","disk_load":"Festplatte Auslastung","disk_space":"Festplattenkapazität","domain":"Domain","doorbell":"Türklingel","doorbellSensor_info":"Exposes the doorbell device for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","download":"Download","download_backup_archive":"Backup Archiv herunterladen","download_failed":"Download fehlgeschlagen","drop_files_here":"Datei hierher ziehen","drop_widgets_here":"Widgets hier droppen","dwell_time":"Verweilzeit","dwell_time_info":"Verweilzeit bedeutet, dass ein Bewegungsmelder nach dem Auslösen einen Zeitraum von N-Sekunden benötigt, in dem er keine Bewegung erkennt, um wieder in den Standard-Erkennungsmodus zurückzukehren. Dadurch wird verhindert, dass der Sensor mehrere Alarme für dieselbe Bewegung aussendet","email":"Email","email_body_lookup":"Email durchsuchen nach","email_body_lookup_info":"If camera.ui can\'t find out the name of the camera by the email address, you can enter a term here so that camera.ui can search the text content of the email for this term and thus assign the camera","email_from":"Email von","email_from_info":"The email from address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","email_to":"Email an","email_to_info":"The email to address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","empty":"Leer","enabled":"Aktiviert","encoder_options":"Encoder Optionen","encoder_options_info":"Options to be passed to the video encoder.","encoder_options_info_hksv":"Options to be passed to the video encoder for the HKSV recording process.","endpoints":"Endpunkte","enter_new_password":"Bitte geben Sie ein neues Passwort ein","error":"Fehler","exclude":"Ausschließen","excludeSwitch_info":"Exposes a \'exclude\' switch to HomeKit to exclude/include the camera from the interface settings within HomeKit.","existing_rooms":"Vorhandene Räume","favourite":"Favorit","favourites":"Favoriten","february":"Februar","ffmpeg_and_stream":"FFmpeg und Stream","field_must_not_be_empty":"Feld darf nicht leer sein","fill_all_required_fields":"Bitte füllen Sie alle erforderlichen Felder","filter":"Filter","filters":"Filter","finish":"Beenden","finish_zone":"Zone beenden","forceClose_timer":"Bewegungserkennung resetten nach","forceClose_timer_info":"Timer in Minuten der das konstante Erkennen von Bewegung automatisch nach N-Minuten unterbricht (resettet). 0 = Deaktiviert. Achtung: Wenn der Timer deaktiviert wird, liegt es an der Kamera WANN die Bewegungserkennung als \\"fertig\\" gilt und somit die Aufnahme gestoppt wird. Dies kann zu sehr langen Aufnahmen führen!","forgotpw_content":"Wenn Sie ihr Passwort vergessen haben, können sie durch das Löschen der Datenbank oder Einspielen eines Backups diesen wieder herstellen.","forgotpw_title":"Passwort vergessen?","fps":"FPS","fps_info":"The fps used for video stream.","fps_info_hksv":"The maximum frame rate used for HKSV. If not set, will use any size HomeKit requests (-r).","free_disk_space":"Verbleibender Speicherplatz","friday":"Freitag","from":"Von","ftp":"FTP","ftp_absolute_path":"FTP Absoluter Pfad","ftp_server_config":"FTP Server Konfiguration","fullscreen":"Vollbild","general":"Allgemein","general_information":"Allgemeine Informationen","general_settings":"Allgemeine Einstellungen","go_back":"Zurück","gray":"Grau","green":"Grün","height":"Video Höhe","height_info":"The height used for video stream.","height_info_hksv":"The maximum height used for HKSV. If not set, will use any size HomeKit requests (-s).","help_started":"Um Ihnen den Einstieg zu erleichtern und gute Erfahrungen mit camera.ui zu machen, nehmen Sie bitte die folgende Konfiguration vor.","homebridge_restart_info":"Mit (²) markierte Felder benötigen ein Neustart von Homebridge","host":"Host","hour":"Stunde","hours":"Stunden","http":"HTTP","http_server_config":"HTTP Server Konfiguration","image":"Bild","inactive":"Inaktiv","interface":"Interface","interface_appearance":"Interface Erscheinungsbild","interface_config":"Interface Konfiguration","interface_language":"Interface Sprache","interface_nav_info":"Erstellen Sie neue Räume oder nehmen andere Einstellungen vor","interface_player":"Interface Player","invalid_password":"Ungültiges Passwort","invalid_username":"Ungültiger Benutzername","january":"Januar","july":"Juli","june":"Juni","label":"Label","labels":"Labels","language":"Sprache","last_changed":"Zuletzt geändert","last_notification":"Letzte Benachrichtigung","last_recording":"Letzte Aufnahme","last_updated":"Zuletzt geändert","light":"Hell","list_of_existing_user":"Liste vorhandener Benutzer","live":"Live","livestream":"Livestream","livestream_snapshot":"Schaltet zwischen Livestream oder Snapshot Interval","load":"Auslastung","localhost":"Localhost","localhttp":"Lokal HTTP","location":"Ort","log":"Protokoll","login":"Login","loglevel":"Log Level","loglevel_info":"Show only defined log level (Info = Show informative messages during processing. This is in addition to warnings and errors - Debug: Show everything, including debugging information - Warning: Show only warnings and errors - Error: Show only errors)","manufacturer_info":"Set the manufacturer name for display in the Home app","map_audio":"Audio Stream","map_audio_info":"Selects the stream used for audio (-map).","map_video":"Video Stream","map_video_info":"Selects the stream used for video (-map).","march":"März","mark_all_as_read":"Alle als Gelesen markieren","master":"Meister","max_delay":"Maximale Verzögerung","max_delay_info":"When receiving data over UDP, the demuxer tries to reorder received packets (since they may arrive out of order, or packets may get lost totally). This can be disabled by setting the maximum demuxing delay to zero (-max_delay).","max_streams":"Maximale Anzahl Streams","max_streams_info":"The maximum number of streams that will be allowed at once to this camera.","may":"Mai","memory":"Arbeitsspeicher","memory_load":"Arbeitsspeicher Auslastung","message":"Nachricht","mode":"Modus","model_info":"Set the model for display in the Home app","monday":"Montag","motion":"Bewegung","motionDoorbellSwitch_info":"Enables dummy switches to trigger motion and/or doorbell, if either of those are enabled. When enabled there will be an additional switch that triggers the motion or doorbell event.","motionDoorbell_info":"Rings the doorbell when motion is activated. This allows for motion alerts to appear on Apple TVs.","motionSensor_info":"Exposes the motion sensor for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","motion_message":"Bewegungsmitteilung","motion_reset":"Keine Bewegung","motion_timeout":"Bewegung Timeout","motion_timeout_info":"The number of seconds after triggering to reset the motion sensor. Set to 0 to disable resetting of motion trigger.","movement_detected":"Bewegung erfasst","movement_on":"Bewegung am","mqtt":"MQTT","mqtt_config":"MQTT Konfiguration","mqtt_publish_topic":"MQTT Publish Topic","name":"Name","never":"Niemals","new":"Neu","new_content_available":"Neue Inhalte verfügbar","new_password":"Neues Passwort","new_password_verify":"Neues Passwort bestätigen","new_room":"Neuer Raum","new_zone":"Neue Zone","next":"Nächste","no_access":"Keine Zugriffsberechtigung","no_camera_selected":"Keine Kamera ausgewählt","no_cameras":"Keine Kameras","no_data":"Keine Daten","no_data_available":"Keine Daten verfügbar","no_feed":"Kein Feed","no_file_selected":"Keine Datei ausgewählt","no_label":"Kein Label","no_label_matching":"Keine Label gefunden für","no_more_cameras":"Keine weiteren Kameras","no_more_data":"Keine weiteren Daten","no_more_notifications":"Keine weiteren Benachrichtigungen","no_more_recordings":"Keine weiteren Aufnahmen","no_notifications":"Keine Benachrichtigungen","no_password_defined":"Kein Passwort definiert","no_permissionlevel_defined":"Zugangsberechtigung nicht definiert","no_recordings":"Keine Aufnahmen","no_registered_user":"Keine registrierte Benutzer","no_results":"Keine Ergebnisse","no_roomname_defined":"Kein Raumname definiert","no_title":"Kein Titel","no_username_defined":"Benutzername nicht definiert","notfound_message":"Sorry, die gesuchte Seite existiert nicht.","notification":"Benachrichtigung","notification_text":"@ hat eine neue Bewegung erfasst im Raum %","notifications":"Benachrichtigungen","notifications_alert":"Sie haben insgesamt % Benachrichtigung(en)","notifications_nav_info":"Verwalten Sie die Alexa, Telegram und Webhookeinstellungen","november":"November","now":"Jetzt","npm":"NPM","october":"Oktober","offline":"Offline","ok":"Ok","old_password":"Altes Passwort","online":"Online","options":"Optionen","orange":"Orange","page_not_found":"Die angeforderte Seite konnte nicht gefunden werden.","password":"Passwort","password_is_required":"Passwort erforderlich","password_not_match":"Passwort stimmt nicht überein","password_reenter":"Passwort erneut eingeben","path_is_required":"Pfad ist erforderlich","path_to_certificate":"Pfad zum Zertifikat","path_to_key":"Pfad zum Schlüssel","permission":"Berechtigung","permission_required":"Berechtigung erforderlich","permissions":"Berechtigungen","ping_timeout":"Ping Zeitüberschreitung","pink":"Pink","pixel_difference":"Pixel/Farb Differenz","pixel_difference_info":"Der Farbunterschied, der erforderlich ist, um eine Bewegung auf einem Pixel auszulösen (je kleiner der Wert desto kleiner der Farbunterschied und je größer der Wert desto größer der Farbunterschied der gebraucht wird um es als Bewegung zu registrieren)","plugins":"Plugins","port":"Port","prebuffering":"Vorpuffern","prebuffering_info":"Enables camera video prebuffering.","press_enter_to_create":"Drücken Sie %Enter% um einen neuen Label herzustellen","prev":"Vorherige","privacyMode_info":"Turn off the camera feed and replace it with a privacy image in HomeKit","privacySwitch_info":"Exposes a \'privacyMode\' switch to replace the camera feed with a privacy image in HomeKit","probe_size":"Probe Größe","probe_size_info":"Set probing size in bytes, i.e. the size of the data to analyze to get stream information. A higher value will enable detecting more information in case it is dispersed into the stream, but will increase latency. Must be an integer not lesser than 32. It is 5000000 by default (-probesize).","process":"Prozess","profile":"Profil","purple":"Lila","read_rate":"Lese Rate","read_rate_info":"Read input at native frame rate (-re).","reconnect":"Neu verbinden","record_on_movement":"Aufnehmen bei Bewegung durch UI","record_on_movement_info":"Enables recording video (eg on movement) through UI and NOT through external controller.","recording":"Aufnahme","recording_text":"Das @ wurde am % durch # aufgenommen.","recording_time":"Aufnahmezeit","recording_timer_not_editable":"Aufnahmezeit kann nicht bearbeitet werden. Einstellungen können im config.json geändert werden.","recording_type":"Aufnahmetyp","recording_type_not_editable":"Aufnahmetyp kann nicht bearbeitet werden. Einstellungen können im config.json geändert werden.","recordings":"Aufnahmen","recordings_alert":"Sie haben insgesamt % Aufnahme(n) und # Aufnahmen wurden ausgewählt","recordings_nav_info":"Verwalten Sie die Aufnahmeeinstellungen","refresh":"Aktualisieren","registered_user":"Registrierte Benutzer","rekognition":"Rekognition","rekognition_nav_info":"Bildanalyse bei Bewegungserkennung","release_notes":"Release Notes","reload":"Neu Laden","remove":"Löschen","remove_after":"Löschen nach","remove_all":"Alles löschen","remove_all_confirm":"Alles löschen bestätigen","remove_all_confirm_text":"Nach dem Klicken auf \'Alles löschen\' werden alle @ unwiederruflich gelöscht. Sind Sie sicher?","remove_camera":"Kamera löschen","remove_camera_confirm_text":"Wollen Sie die Kamera \'@\' wirklich löschen?","remove_camera_confirm_text_homebridge":"Wollen Sie die Kamera \'@\' wirklich löschen? Dadurch wird die Kamera auch aus Homebridge entfernt!","removed":"gelöscht","reorder_queue_size":"Größe der Warteschlange","reorder_queue_size_info":"Packets may be received out of order, so before they can be passed onwards, they need to be reordered. Default jitter buffer size is 500. This option allows you to specify it manually. Higher values will lead to greater latency. Only applicable for reception over UDP (-reorder_queue_size).","reports":"Berichte","reset":"Zurücksetzen","reset_confirm":"Zurücksetzen bestätigen","reset_confirm_text":"Nach dem Klicken auf \'Zurücksetzen\' werden alle gespeicherten Daten unwiederruflich gelöscht. Sind Sie sicher?","restart":"Neustarten","restart_cameraui":"Bitte starten Sie camera.ui neu","restart_confirm":"Neustart Bestätigen","restart_confirm_text":"Wollen sie @ wirklich neu starten?","restore":"Wiederherstellen","restore_from_backup_file":"Wiederherstellen aus Backup Archiv","room":"Raum","room_already_exists":"Raum existiert bereits","room_name":"Raum Name","rooms":"Räume","rss":"RSS","rss_feed":"RSS Feed","rss_feed_widget_info":"Bitte geben Sie eine gültige RSS URL ein um den Feed im Widget sehen zu können.","rss_url":"RSS URL","rtsp_transport":"RTSP Transport","rtsp_transport_info":"Set RTSP transport protocols (-rtsp_transport).","saturday":"Samstag","save":"Speichern","save_as":"Speichern unter","save_path":"Speicher Pfad","seconds":"Sekunden","select":"Auswählen","selected":"ausgewählt","selected_camera":"Ausgewählte Kamera","sensitivity":"Empfindlichkeit","sensitivity_info":"Der Prozentsatz an Pixeln (siehe Differenz), der erforderlich ist, um eine Bewegung auszulösen (eine geringe Empfindlichkeit bedeutet das mehr Pixelunterschiede erkannt werden müssen, eine große Empfindlichkeit bedeutet das weniger Pixelunterschiede erkannt werden müssen)","september":"September","serialNr":"Seriennummer","serialNumber_info":"Set the serial number for display in the Home app","server":"Server","server_information":"Server Information","settings":"Einstellungen","shortcuts":"Shortcuts","shortcuts_widget_info":"Bitte wählen Sie die Aktion aus der Liste aus um diesen in den Shortcuts anzuzeigen","signin":"Einloggen","signout":"Ausloggen","signout_after":"Ausloggen nach","smtp":"SMTP","smtp_server_config":"SMTP Server Konfiguration","snapshot":"Bild","snapshot_timer":"Snapshot Timer","source":"Video Quelle","source_info":"FFmpeg options on where to find and how to decode your camera\'s video stream. The most basic form is \'-i\' followed by your camera\'s URL.","source_info_hksv":"Here you can set a custom video source for HKSV recordings only.","space_replace":"Leerzeichen ersetzen mit","speaker_end_time":"Lautsprecheraussage bis","speaker_start_time":"Lautsprecheraussage von","ssl":"SSL","ssl_config":"SSL Konfiguration","standard":"Standard","start":"Starten","start_end_message":"Das war\'s schon. <br> Viel Spaß mit camera.ui!","start_info_message":"Sie müssen Ihre Anmeldedaten ändern <br> bevor Sie sich bei camera.ui anmelden","status":"Status","still_image_source":"Bild Quelle","still_image_source_info":"If your camera also provides a URL for a still image, that can be defined here with the same syntax as \'source\'. If not set, camera.ui will grab one frame from \'source\'.","stop":"Stoppen","stream_timeout":"Stream Zeitüberschreitung","sub_source_info":"Low Resolution Substream. FFmpeg options on where to find and how to decode your camera\'s video substream. The most basic form is \'-i\' followed by your camera\'s URL. The substream will be used to probe the stream or for motion detection through video analysis.","successfull":"Erfolgreich","successfully_added_camera":"Kamera wurde erfolgreich hinzugefügt","successfully_changed":"Erfolgreich geändert","successfully_created":"Erfolgreich erstellt","successfully_removed":"Erfolgreich gelöscht","sunday":"Sonntag","sunny":"Sonnig","system":"System","system_nav_info":"Verwalten Sie die Backend Einstellungen von camera.ui","system_restart_initiated":"System Neustart wurde initiiert","system_successfully_restarted":"System wurde erfolgreich neugestartet","system_successfully_updated":"System wurde erfolgreich geupdated","system_update_initiated":"System Update wurde initiiert","telegram":"Telegram","telegram_message_type":"Telegram Benachrichtigungstyp","telegram_type_not_editable":"Telegram kann nicht geändert werden für diese Kamera.","temperature":"Temperatur","text":"Text","theme":"Thema","themes":"Themen","thursday":"Donnerstag","time":"Zeit","timeout":"Zeitüberschreitung","timeout_info":"Socket TCP I/O timeout in seconds. If you have problems with hanging FFmpeg processes in the background, you can enter any value here to stop the process automatically after the entered time, if no response comes (-stimeout).","timerange":"Zeitspanne","timestamp":"Zeitstempel","to":"Bis","token":"Token","total":"Gesamt","tuesday":"Dienstag","type":"Typ","unbridge_info":"Bridged cameras can cause slowdowns of the entire Homebridge instance. If unbridged, the camera will need to be added to HomeKit manually.","undo":"Rückgängig","up_to_date":"Aktuell","update":"Updaten","update_available":"Update verfügbar","update_or_downgrade":"Updaten/Downgraden","upload_backup_archive":"Backup Archiv hochladen","uptime":"Betriebszeit","use_interface_timer":"Interface Recording Timer","use_interface_timer_info":"If enabled, the recording timer from camera.ui will be used for \\"motionTimeout\\".","user":"Benutzer","user_list":"Benutzerliste","username":"Benutzername","username_already_exists":"Benutzername wird bereits verwendet","username_is_required":"Benutzername erforderlich","users":"Benutzer","users_nav_info":"Löschen Sie vorhandene Benutzer oder legen Sie Neue an","utilization":"Auslastung","verification_not_successfull":"Verifikation nicht erfolgreich","version":"Version","video":"Video","video_codec":"Video Codec","video_codec_info":"Set the codec used for encoding video sent to HomeKit, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_codec_info_hksv":"Set the codec used for encoding video for HKSV, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_filter":"Zusätzliche Videofilter","video_filter_info":"Comma-delimited list of additional video filters for FFmpeg to run on the video. If \'none\' is included, the default video filters are disabled (-filter:v).","video_processor_config":"Video Prozessor Konfiguration","video_processor_path":"Video Prozessor Pfad","video_resolution":"Video Auflösung","videoanalysis":"Video Analyse","videoanalysis_info":"Activates Video Analysis for motion detection (a low resolution sub stream is preferred or prebuffering enabled)","warning":"Warnung","weather":"Wetter","weather_widget_info":"Bitte suchen Sie nach Ihrem Städtenamen auf Englisch, um das Wetter-Widget zu aktivieren.","weather_widget_info_owm":"Die Wetterdaten werden von OpenWeather bereitgestellt.","webhook":"Webhook","webhook_url":"Webhook URL","wednesday":"Mittwoch","welcome_back":"Willkommen zurück","welcome_message":"Willkommen bei","welcome_submessage":"Das Webinteface für ihre RTSP fähigen Kameras","widgets":"Widgets","width":"Video Breite","width_info":"The width used for video stream.","width_info_hksv":"The maximum width used for HKSV. If not set, will use any size HomeKit requests (-s).","yellow":"Gelb"}}')
    },
    2557: function (e, t, a) {},
    "33f8": function (e) {
        e.exports = JSON.parse('{"fr":{"account":"Compte","account_nav_info":"Gérer vos données comme votre utilisateur et mot de passe","active":"Activé","add":"Ajouter","add_camera":"Ajouter Caméra","add_labels":"Ajouter Libellé","add_new_camera":"Ajouter nouvelle Caméra","add_new_user":"Ajouter nouvel utilisateur","add_to_homescreen":"Ajouter à l\'écran d\'accueil","admin":"Administrateur","alarm":"Alarme","alarm_ftp_info":"Le Serveur FTP doit être activé pour déclencher un mouvement via l\'envoi de fichier !","alarm_http_info":"Le Serveur HTTP doit être activé pour déclencher un mouvement via appel HTTP !","alarm_http_reset_info":"Le Serveur HTTP doit être activé pour réinitialiser un mouvement via appel HTTP !","alarm_smtp_info":"Le Serveur SMTP doit être activé pour déclencher un mouvement via E-Mail !","alexa":"Alexa","all":"Tout","all_notifications_removed":"Toutes les notifications ont été retirées","all_recordings_removed":"Tous les enregistrements ont été retirés","amazon_rekognition":"Amazon Rekognition","analyze_duration":"Durée d\'Analyse","analyze_duration_info":"Spécifier le nombre de microsecondes analysées pour sonder l\'entrée. Une valeur plus élevée permettra de détecter des informations plus précises mais augmentera la latence. Par défaut à 5 000 000 microsecondes = 5 secondes (-analyzeduration).","appearance":"Apparence","appearance_nav_info":"Modifier la langue ou l\'apparence de l\'interface","apply":"Appliquer","april":"Avril","at_home":"À la maison","at_home_switch":"Interrupteur À la maison","atleast_one_permission_required":"Au moins une permission doit être sélectionnée","audio":"Audio","audio_codec":"Codec Audio","audio_codec_info":"Définir le codec utilisé pour encoder l\'audio envoyé à HomeKit pour HSV, doit être basé sur ACC (-acodec).","audio_codec_info_hksv":"Set the codec used for encoding audio for HKSV, must be AAC-based (-acodec).","audio_info":"Active le streaming audio depuis la caméra.","audio_info_hksv":"Enables audio for HKSV recordings.","august":"Août","auto":"Auto","auto_darkmode":"Mode Sombre Auto","automated_backup":"Sauvegarde Automatisée","automation":"Automatisation","aws":"Services Amazon Web","aws_access_key_id":"Access Key ID","aws_contingent_left":"Contingent Left","aws_contingent_total":"Contingent Total","aws_last_rekognition":"Dernière Rekognition","aws_region":"Région","aws_secret_access_key":"Secret Access Key","back":"Retour","backup":"Sauvegarde","backup_and_restore":"Sauvegarde & Restauration","backup_download":"Télécharger la Sauvegarde","backup_file":"Fichier de Sauvegarde","backup_info_download":"Télécharger une archive de sauvegarde de tout votre environement camera.ui. Cela sauvegardera tout le contenu (enregistrements inclus) de votre dossier de stockage camera.ui. Vous pouvez le restaurer ensuite sur n\'importe quelle plateforme où tourne camera.ui","backup_info_restore":"Restaurer une archive de sauvegarde que vous avez précédemment faite avec camera.ui. Votre configuration camera.ui, base de donnée, enregistrement et les comptes utilisateurs camera.ui seront restaurés","backup_info_shedule":"Une sauvegarde complète de la base de donnée de camera.ui est créée automatiquement chaque jour à 12:00:00 et conservée pour 7 jours","backup_nav_info":"Créer et gérer les copies de sauvegarde depuis l\'interface","backup_restore":"Restaurer une Sauvegarde","backup_restored":"Sauvegarde Restaurée","backup_shedule":"Calendrier de Sauvegarde","banner_text_doorbell":"Une Sonnette a été déclenchée","banner_text_motion":"Nouveau mouvement détecté","base":"Base","bitrate":"Débit","bitrate_info":"Débit utilisé pour le flux vidée.","bitrate_info_hksv":"The maximum bitrate used HKSV, in kbit/s. If not set, will use any bitrate HomeKit requests (-b:v).","blgray":"Bleu Gris","blue":"Bleu","blue_gray":"Bleu Gris","brown":"Brun","browse":"Parcourir","camera":"Caméra","camera_alarm_info":"Paramètres de Détection de Mouvement","camera_already_exists":"La Caméra existe déjà","camera_ffmpeg_stream_info":"Paramètres FFmpeg et Flux","camera_homebridge_info":"Paramètres de Caméra Homebridge","camera_interface_info":"Paramètres de l\'Interface Caméra","camera_notification_info":"Paramètres de Notification Caméra","camera_player_info":"Paramètres Lecteur Vidéo de l\'Interface","camera_prebuffering_info":"Pré-buffering du Flux Caméra","camera_rekognition_info":"Analyse d\'image à la détection de mouvement","camera_settings_save_info":"Les champs marqués avec (¹) peuvent être sauvés uniquement en cliquant sur le bouton \\"✓\\"","camera_videoanalysis_info":"Système de détection de mouvement camera.ui","cameras":"Caméras","cameras_nav_info":"Gérer les paramètres de streaming des caméras","cameras_to_exclude_from_athome":"Caméras à exclure de \'À la maison\'","camview":"Camview","cancel":"Annuler","cannot_change_pw":"Ne peut pas changer le mot de passe","cannot_login":"Utilisateur et/ou mot de passe incorrects","change":"Changer","change_your_password":"Changer votre Mot de passe","charts":"Graphiques","clear":"Nettoyer","close":"Fermer","color":"Couleur","confidence":"Confiance","config":"Configuration","config_information":"config.json","config_was_saved":"La configuration a été sauvegardée","connected":"Connecté","console":"Console","cpu_load":"Charge CPU","cpu_temperature":"Température CPU","create_zipped_backup_file":"Créer un fichier de sauvegarde zippé","custom":"Personalisé","dark":"Sombre","darkmode":"Mode Sombre","dashboard":"Accueil","database":"Base de données","database_information":"Information Base de données","database_resetted":"Base de données réinitialisée","day":"Jour","days":"Jours","debug":"Debug","debug_info":"Inclure les sortie de debuggage du processus principal de FFmpeg dans le journal.","december":"Décembre","disable_info":"Disables the camera and removes it from HomeKit.","disabled":"Désactivé","disk_load":"Disk Load","disk_space":"Disk Space","domain":"Domaine","doorbell":"Sonette","doorbellSensor_info":"Expose le périphérique de sonnette pour cette caméra. Cela peut être déclenché avec les interrupteurs factices, les messages MQTT ou via HTTP, selon les fonctionnalités activées dans la configuration.","download":"Télécharger","download_backup_archive":"Télécharger l\'Archive de Sauvegarde","download_failed":"Téléchargement échoué","drop_files_here":"Lacher les fichiers ici","drop_widgets_here":"Lacher les widgets ici","dwell_time":"Temps d\'Arrêt","dwell_time_info":"Le Temps d\'Arrêt signifie qu\'après le déclenchement d\'un détecteur de mouvement, il aura besoin d\'une période de N secondes pendant laquelle il ne détecte aucun mouvement afin de se \\"réinitialiser\\" à son mode de détection par défaut. Cela empêche le capteur d\'envoyer plusieurs alertes pour le même mouvement","email":"E-mail","email_body_lookup":"Recherche dans l\'e-mail pour","email_body_lookup_info":"Si camera.ui ne peut pas trouver le nom de la caméra par l\'adresse e-mail, vous pouvez entrer un terme ici afin que camera.ui puisse rechercher dans le contenu textuel de l\'e-mail pour ce terme et ainsi attribuer la caméra","email_from":"Expéditeur E-mail","email_from_info":"L\'adresse de l\'expéditeur de l\'e-mail (sans tout ce qui est après le @) à être attribué à cette caméra (ex: ma_camera_test. Si non défini, le nom de la caméra sera utilisé)","email_to":"Destinataire E-mail","email_to_info":"L\'adresse du destinataire de l\'e-mail (sans tout ce qui est après le @) à être attribué à cette caméra (ex: ma_camera_test. Si non défini, le nom de la caméra sera utilisé)","empty":"Vide","enabled":"Activé","encoder_options":"Options de l\'Encodeur","encoder_options_info":"Options à être passées à l\'Encodeur Vidéo.","encoder_options_info_hksv":"Options to be passed to the video encoder for the HKSV recording process.","endpoints":"Terminaux","enter_new_password":"Entrer un mot de passe svp","error":"Erreur","exclude":"Exclure","excludeSwitch_info":"Expose un interrupteur \'Exclure\' à HomeKit pour exclure/inclure la caméra des paramètres d\'interface dans HomeKit.","existing_rooms":"Pièces Existantes","favourite":"Favori","favourites":"Favoris","february":"Février","ffmpeg_and_stream":"FFmpeg et Flux","field_must_not_be_empty":"Le champ ne peut être vide","fill_all_required_fields":"Veuillez remplir tous les champs requis","filter":"Filter","filters":"Filtres","finish":"Finir","finish_zone":"Finir la Zone","forceClose_timer":"Réinitialiser le mouvement après","forceClose_timer_info":"Décompte en minutes qui interrompt (réinitialise) la détection constante de mouvement après N minutes. 0 = Désactivé. Attention: Si le décompte est désactivé, c\'est la caméra de décider QUAND la détection de mouvement est considérée comme \\"Terminée\\" et donc quand l\'enregistrement est stoppé. Cela peut causer des très longs enregistrements !","forgotpw_content":"Si vous avez oublié votre mot de passe, vous pouvez le restaurer en supprimant la base de données ou en important une sauvegarde.","forgotpw_title":"Mot de passe oublié ?","fps":"FPS","fps_info":"Les fps (images par secondes) utilisé pour le flux vidéo.","fps_info_hksv":"The maximum frame rate used for HKSV. If not set, will use any size HomeKit requests (-r).","free_disk_space":"Free Disk Space","friday":"Vendredi","from":"De","ftp":"FTP","ftp_absolute_path":"Chemin Absolu FTP","ftp_server_config":"Configuration Serveur FTP","fullscreen":"Plein Écran","general":"Général","general_information":"Information Générale","general_settings":"Configuration Générale","go_back":"Retour","gray":"Gris","green":"Vert","height":"Hauteur Vidéo","height_info":"Hauteur utilisée pour le flux vidéo.","height_info_hksv":"The maximum height used for HKSV. If not set, will use any size HomeKit requests (-s).","help_started":"Pour vous aider à démarrer et vous fournir une bonne expérience avec camera.ui, Veuillez remplir la configuration suivante.","homebridge_restart_info":"Changer les champs marqués avec (²) nécessitera un redémarrage de Homebridge","host":"Hôte","hour":"Heure","hours":"Heures","http":"HTTP","http_server_config":"Configuration Serveur HTTP","image":"Image","inactive":"Inactif","interface":"Interface","interface_appearance":"Apparence Interface","interface_config":"Configuration Interface","interface_language":"Langue Interface","interface_nav_info":"Créer des nouvelles pièces ou autres paramètres","interface_player":"Lecteur Interface","invalid_password":"Mot de passe Invalide","invalid_username":"Utilisateur Invalide","january":"Janvier","july":"Juillet","june":"Juin","label":"Libellé","labels":"Libellés","language":"Langue","last_changed":"Dernière modification","last_notification":"Dernière notification","last_recording":"Dernier enregistrement","last_updated":"Dernière mise à jour","light":"Lumière","list_of_existing_user":"Liste des utilisateurs enregistrés","live":"Live","livestream":"Flux en temps réel","livestream_snapshot":"Passer entre le flux en temps réel et l\'interval de clichés","load":"Charge","localhost":"Localhost","localhttp":"HTTP Local","location":"Localisation","log":"Journal","login":"Login","loglevel":"Log Level","loglevel_info":"Show only defined log level (Info = Show informative messages during processing. This is in addition to warnings and errors - Debug: Show everything, including debugging information - Warning: Show only warnings and errors - Error: Show only errors)","manufacturer_info":"Définir le nom du constructeur à afficher dans l\'app Maison/Domicile/Home","map_audio":"Flux Audio","map_audio_info":"Sélectionner le flux utilisé pour l\'audio (-map).","map_video":"Flux Vidéo","map_video_info":"Sélectionner le flux utilisé pour la vidée (-map).","march":"Mars","mark_all_as_read":"Marquer Tout comme Lu","master":"Maître","max_delay":"Retard Max","max_delay_info":"Lorsque on reçoit des données via UDP, le démuxeur essaie de réordonner les paquets reçus (ils peuvent arriver dans le mauvais ordre, ou les paquets peuvent être perdus). Peut être désactivé en mettant le retard maximal de démuxage à zéro (-max_delay).","max_streams":"Flux Max","max_streams_info":"Le nombre maximum de flux qui sera autorisé en même temps pour cette caméra.","may":"Mai","memory":"Mémoire","memory_load":"Charge Mémoire","message":"Message","mode":"Mode","model_info":"Définir le modèle à afficher dans l\'app Maison/Domicile/Home","monday":"Lundi","motion":"Mouvement","motionDoorbellSwitch_info":"Active l\'interrupteur factice pour déclencher le mouvement et/ou la sonnette, si l\'un des deux est activé. Une fois activé, il y aura un interrupteur supplémentaire qui déclenchera un évènement mouvement ou sonnette.","motionDoorbell_info":"Faire sonner la sonnette lorsqu\'un mouvement est détecté. Cela permettra d\'afficher les alertes de mouvement sur les Apple TVs.","motionSensor_info":"Expose le capteur de mouvement pour cette caméra. Cela peut être déclenché avec les interrupteurs factices, les messages MQTT ou via HTTP, selon les fonctionnalités activées dans la configuration.","motion_message":"Message de Mouvement","motion_reset":"Aucun Mouvement","motion_timeout":"Délai d\'expiration du Mouvement","motion_timeout_info":"Le nombre de secondes après déclenchement pour réinitialiser le détecteur de mouvement. Définir à 0 pour désactiver la réinitialisation du détecteur de mouvement.","movement_detected":"Mouvement détecté","movement_on":"Mouvement sur","mqtt":"MQTT","mqtt_config":"Configuration MQTT","mqtt_publish_topic":"MQTT Publish Topic","name":"Nom","never":"Jamais","new":"Nouveau","new_content_available":"Nouveau contenu disponible","new_password":"Nouveau Mot de passe","new_password_verify":"Vérifier le nouveau Mot de passe","new_room":"Nouvelle Pièce","new_zone":"Nouvelle Zone","next":"Suivant","no_access":"Pas de permission d\'accès","no_camera_selected":"Aucune caméra sélectionnée","no_cameras":"Aucune caméra","no_data":"No Data","no_data_available":"Aucune donnée disponible","no_feed":"Aucun Flux RSS","no_file_selected":"Aucun fichier sélectionné","no_label":"Aucun Libellé","no_label_matching":"Aucun libellé trouvé pour","no_more_cameras":"Plus de caméra","no_more_data":"Plus de données","no_more_notifications":"Plus de notifications","no_more_recordings":"Plus d\'enregistrements","no_notifications":"Aucune notification","no_password_defined":"Aucun mot de passe défini","no_permissionlevel_defined":"Aucun niveau de permission défini","no_recordings":"Aucun enregistrement","no_registered_user":"Aucun utilisateur enregistré","no_results":"Aucun résultat","no_roomname_defined":"Aucun nom de pièce défini","no_title":"Aucun titre","no_username_defined":"Aucun nom d\'utilisateur défini","notfound_message":"Désolé, la page que vous cherchez n\'existe pas.","notification":"Notification","notification_text":"@ a détecté un nouveau mouvement dans la pièce %","notifications":"Notifications","notifications_alert":"You have a total of % notifications","notifications_nav_info":"Gérer les paramètres Alexa, Telegram et Webhook","november":"Novembre","now":"Maintenant","npm":"NPM","october":"Octobre","offline":"HorsLigne","ok":"Ok","old_password":"Ancien Mot de passe","online":"EnLigne","options":"Options","orange":"Orange","page_not_found":"La page demandée n\'a pas pu être trouvée.","password":"Mot de passe","password_is_required":"Mot de passe requis","password_not_match":"Les mots de passe ne correspondent pas","password_reenter":"Ré-entrer le mot de passe","path_is_required":"Le chemin est requis","path_to_certificate":"Chemin du certificat","path_to_key":"Chemin de la clé","permission":"Permission","permission_required":"Permission requise","permissions":"Permissions","ping_timeout":"Timeout Ping","pink":"Rose","pixel_difference":"Différence Pixel/Couleur","pixel_difference_info":"La différence de couleur requise pour déclencher le mouvement sur un pixel (plus petite est la valeur, plus petite est la différence de couleur et plus grand est la valeur, plus grande est la différence de couleur nécessaire pour être considérée comme un mouvement)","plugins":"Plugins","port":"Port","prebuffering":"Pré-buffering","prebuffering_info":"Active le Pré-buffering sur la caméra.","press_enter_to_create":"Presser %Entrée% pour créer un nouveau libellé","prev":"Précédent","privacyMode_info":"Eteindre le flux caméra et le remplacer par une image de confidentialité dans HomeKit","privacySwitch_info":"Expose un interrupteur \'privacyMode\' pour remplacer le flux caméra avec l\'image de confidentialité dans HomeKit","probe_size":"Taille Sonde","probe_size_info":"Définissez la taille de sondage en octets, c\'est-à-dire la taille des données à analyser pour obtenir des informations sur le flux. Une valeur plus élevée permettra de détecter plus d\'informations au cas où elles seraient dispersées dans le flux, mais augmentera la latence. Doit être un entier non inférieur à 32. 5000000 par défaut (-probesize).","process":"Processus","profile":"Profile","purple":"Mauve","read_rate":"Taux de lecture","read_rate_info":"Lire l\'entrée au taux d\'image natif (-re).","reconnect":"Reconnecter","record_on_movement":"Enregistrer sur mouvement via l\'interface","record_on_movement_info":"Active l\'enregistrement vidéo (sur mouvement par ex) via l\'interface et PAS via controleur externe.","recording":"Enregistrement","recording_text":"Le @ a été pris sur % par un #.","recording_time":"Temps d\'enregistrement","recording_timer_not_editable":"Temps d\'enregistrement ne peut être édité. Les paramètres peuvent être changés dans config.json.","recording_type":"Type d\'enregistrement","recording_type_not_editable":"Type d\'enregistrement ne peut être édité. Les paramètres peuvent être changés dans config.json.","recordings":"Enregistrements","recordings_alert":"You have % recordings in total and # recordings were selected","recordings_nav_info":"Gérer les paramètres d\'enregistrement et spécifier le type d\'enregistrement","refresh":"Rafraîchir","registered_user":"Utilisateur Enregistré","rekognition":"Rekognition","rekognition_nav_info":"Analyse d\'image pour la détection de mouvement via Amazon Rekognition","release_notes":"Notes de version","reload":"Recharger","remove":"Supprimer","remove_after":"Supprimer après","remove_all":"Supprimer tout","remove_all_confirm":"Confirmer la suppression de tout","remove_all_confirm_text":"Après avoir cliqué sur \'Supprimer tout\' tous les @ stockés seront irrévocablement supprimés. Êtes-vous certain ?","remove_camera":"Supprimer la Caméra","remove_camera_confirm_text":"Voulez-vous vraiment supprimer la caméra \'@\' ?","remove_camera_confirm_text_homebridge":"Voulez-vous vraiment supprimer la caméra \'@\' ? Cela supprimera aussi la caméra de Homebridge!","removed":"supprimé","reorder_queue_size":"Taille de la file d\'attente de réorganisation","reorder_queue_size_info":"Les paquets peuvent être recus dans le désordre donc avant d\'être transmis, ils doivent être réordonnés. La taille du tampon de gigue (jitter) par défaut est de 500. Cette option vous permet de la spécifier manuellement. Des valeurs plus hautes conduiront à de plus hautes latences. Applicable seulement pour les réceptions sur UDP (-reorder_queue_size).","reports":"Rapports","reset":"Réinitialisation","reset_confirm":"Confirmer réinitialisation","reset_confirm_text":"Après avoir cliqué sur \'Réinitialisation\' toutes les données stockées seront irrévocablement supprimées. Êtes-vous certain ?","restart":"Redémarrer","restart_cameraui":"Veuillez redémarrer camera.ui","restart_confirm":"Confirmer le redémarrage","restart_confirm_text":"Voulez-vous vraiment redémarrer @ ?","restore":"Restaurer","restore_from_backup_file":"Restaurer à partir d\'une Archive de Sauvegarde","room":"Pièce","room_already_exists":"La Pièce existe déjà","room_name":"Nom de la Pièce","rooms":"Pièces","rss":"RSS","rss_feed":"Flux RSS","rss_feed_widget_info":"Veuillez entrer une URL de flux RSS valide pour voir le flux dans le widget.","rss_url":"URL du flux RSS","rtsp_transport":"Transport RTSP","rtsp_transport_info":"Définir les protocoles de transport RTSP (-rtsp_transport).","saturday":"Samedi","save":"Sauvegarder","save_as":"Sauvegarder sous","save_path":"Sauvegarder chemin","seconds":"Secondes","select":"Sélectionner","selected":"sélectionné","selected_camera":"Caméra Sélectionnée","sensitivity":"Sensibilité","sensitivity_info":"Le pourcentage de pixels (voir Différence) requis pour déclencher un mouvement (une sensibilité faible veut dire que plus de différences de pixels doivent être détectées, une sensibilité haute veut dire que moins de différences de pixels doivent être détectées)","september":"Septembre","serialNr":"Numéro de série","serialNumber_info":"Définir le numéro de série à afficher dans l\'app Maison/Domicile/Home","server":"Serveur","server_information":"Information Serveur","settings":"Paramètres","shortcuts":"Raccourcis","shortcuts_widget_info":"Veuillez sélectioner l\'action à partir de la liste afin de l\'afficher dans les raccourcis.","signin":"Connecter","signout":"Déconnecter","signout_after":"Déconnecter après","smtp":"SMTP","smtp_server_config":"Configuration Serveur SMTP","snapshot":"Cliché","snapshot_timer":"Décompte Cliché","source":"Source Vidéo","source_info":"Options FFmpeg sur comment trouver et décoder votre flux vidéo de votre caméra. La forme la plus basique est \'-i\' suivi de l\'url de la caméra.","source_info_hksv":"Here you can set a custom video source for HKSV recordings only.","space_replace":"Replacer les espaces","speaker_end_time":"Temps de fin Haut-Parleur","speaker_start_time":"Temps de début Haut-Parleur","ssl":"SSL","ssl_config":"Configuration SSL","standard":"Standard","start":"Démarrer","start_end_message":"Et voilà. <br> Bon amusement avec camera.ui !","start_info_message":"Vous devez modifier vos informations d\'identification <br> avant de vous connecter à camera.ui","status":"État","still_image_source":"Source Image","still_image_source_info":"Si votre caméra fournis une url pour les images fixes, elle peut être définie ici avec la même syntaxe que la \'source\'. Si non défini, camera.ui capturera une image de la \'source\'.","stop":"Arrêter","stream_timeout":"Délai d\'expiration du flux","sub_source_info":"Sous-Flux basse résolution. Options FFmpeg sur comment trouver et décoder votre sous-flux vidéo de votre caméra. La forme la plus basique est \'-i\' suivi de l\'url de la caméra. Le sous-flux sera utilisé pour sonder le flux ou pour la détection de mouvement via analyse vidéo.","successfull":"Réussi","successfully_added_camera":"La caméra a été ajoutée correctement","successfully_changed":"Changé correctement","successfully_created":"Créé correctement","successfully_removed":"Supprimé correctement","sunday":"Dimanche","sunny":"Ensoleillé","system":"Système","system_nav_info":"Gérer les paramètres du backend de camera.ui","system_restart_initiated":"Un redémarrage système a été initié","system_successfully_restarted":"Le système a été correctement redémarré","system_successfully_updated":"Le système a été correctement mis à jour","system_update_initiated":"Une mise a jour système a été initiée","telegram":"Telegram","telegram_message_type":"Type de Message Telegram","telegram_type_not_editable":"Telegram ne peut être modifié pour cette caméra.","temperature":"Température","text":"Texte","theme":"Thème","themes":"Thèmes","thursday":"Jeudi","time":"Temps","timeout":"Délai d\'expiration","timeout_info":"Délai d\'expiration des E/S du socket TCP en secondes. Si vous avez des problèmes de processus FFmpeg bloqués en arrière-plan, vous pouvez entrer une valeur ici pour stopper le processus automatiquement après le temps désiré si aucune réponse n\'arrive (-stimeout).","timerange":"Time Range","timestamp":"Horodatage","to":"À","total":"Total","tuesday":"Mardi","typ":"Type","unbridge_info":"Les caméras reliées au pont principal peuvent causer des ralentissements de toute l\'instance Homebridge. Une fois déliées du pont, la camera devra être ajoutée à HomeKit manuellement.","undo":"Défaire","up_to_date":"À jour","update":"Mettre à jour","update_available":"Mise à jour disponible","update_or_downgrade":"Mettre à jour/rétrograder","upload_backup_archive":"Envoyer Archive de Sauvegarde","uptime":"Durée de fonctionnement","use_interface_timer":"Décompte d\'Enregistrement de l\'Interface","use_interface_timer_info":"Si activé, le décompte d\'enregistrement de camera.ui sera utilisé pour \\"motionTimeout\\".","user":"Utilisateur","user_list":"Liste d\'Utilisateurs","username":"Nom d\'Utilisateur","username_already_exists":"Le Nom d\'Utilisateur existe déjà","username_is_required":"Le Nom d\'Utilisateur est requis","users":"Utilisateurs","users_nav_info":"Supprimer les utilisateurs existants ou créer des nouveaux","utilization":"Utilisation","verification_not_successfull":"La vérification a échoué","version":"Version","video":"Vidéo","video_codec":"Codec Vidéo","video_codec_info":"Définir le codec utilisé pour encoder les vidéos envoyées à HomeKit, doit être basé sur H.264. Vous pouvez le modifier pour un codec qui utilise l\'accélération matérielle avec cette option, s\'il y en a un de disponible (-vcodec).","video_codec_info_hksv":"Set the codec used for encoding video for HKSV, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_filter":"Filtre Vidéo","video_filter_info":"Liste de filtres vidéos additionnels séparés par des virgules à appliquer sur la vidéo par FFmpeg. Si \'none\' est inclu, les filtres vidéo par défaut sont désactivés (-filter:v).","video_processor_config":"Configuration du Processeur de Vidéo","video_processor_path":"Chemin du Processeur de Vidéo","video_resolution":"Résolution Vidéo","videoanalysis":"Analyse Vidéo","videoanalysis_info":"Active l\'analyse vidéo pour la détection de mouvement (un sous-flux de basse résolution est préféré ou le pré-buffering activé)","warning":"Avertissement","weather":"Météo","weather_widget_info":"Veuillez rechercher votre nom de ville en anglais pour activer le widget météo.","weather_widget_info_owm":"Les données météo proviennent de OpenWeather.","webhook":"Webhook","webhook_url":"URL Webhook","wednesday":"Mercredi","welcome_back":"Content de vous revoir","welcome_message":"Bienvenue sur","welcome_submessage":"L\'interface web pour vos caméras RTSP","widgets":"Widgets","width":"Largeur Vidéo","width_info":"La largeur utilisée pour le flux vidéo.","width_info_hksv":"The maximum width used for HKSV. If not set, will use any size HomeKit requests (-s).","yellow":"Jaune"}}')
    },
    "346c": function (e, t, a) {},
    "365c": function (e, t, a) {
        "use strict";
        a("99af"), a("d3b7");
        var i = a("bc3a"),
            r = a.n(i),
            o = r.a.create({
                baseURL: "".concat(location.origin, "/api")
            });
        o.interceptors.request.use((function (e) {
            var t = JSON.parse(localStorage.getItem("user"));
            return t && t.access_token && (e.headers["Authorization"] = "Bearer ".concat(t.access_token)), Promise.resolve(e)
        }), (function (e) {
            return Promise.reject(e)
        })), o.interceptors.response.use((function (e) {
            return Promise.resolve(e)
        }), (function (e) {
            return Promise.reject(e)
        })), t["a"] = o
    },
    "3a0f": function (e, t, a) {
        "use strict";
        a("7808")
    },
    "402c": function (e, t, a) {
        "use strict";
        var i = a("2b0e"),
            r = a("f309"),
            o = a("21eb"),
            n = a.n(o);
        i["a"].use(r["a"]), t["a"] = new r["a"]({
            icons: {
                iconfont: "mdiSvg"
            },
            options: {
                minifyTheme: n.a
            }
        })
    },
    "40fd": function (e) {
        e.exports = JSON.parse('{"a":"1.1.17"}')
    },
    4360: function (e, t, a) {
        "use strict";
        var i = a("2b0e"),
            r = a("2f62"),
            o = a("1da1"),
            n = a("5530"),
            s = (a("96cf"), a("d3b7"), a("e9c4"), a("adf6")),
            c = a("c9d6"),
            d = a("d4ec"),
            l = a("bee2"),
            u = (a("ac1f"), a("1276"), a("5319"), a("a15b"), a("d81d"), a("81b2"), a("0eb6"), a("b7ef"), a("8bd4"), a("fb6a"), a("25f0"), function (e) {
                var t = e.split(".")[1],
                    a = t.replace(/-/g, "+").replace(/_/g, "/"),
                    i = decodeURIComponent(atob(a).split("").map((function (e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    })).join(""));
                return JSON.parse(i)
            }),
            m = function () {
                function e() {
                    Object(d["a"])(this, e)
                }
                return Object(l["a"])(e, [{
                    key: "serialize",
                    value: function (e) {
                        if (!e) return null;
                        var t = u(e.access_token);
                        return Object(n["a"])({
                            id: t.id,
                            username: t.username,
                            sessionTimer: t.sessionTimer,
                            permissionLevel: t.permissionLevel,
                            photo: t.photo
                        }, e)
                    }
                }]), e
            }(),
            f = new m,
            g = JSON.parse(localStorage.getItem("user")),
            _ = localStorage.getItem("userImg"),
            h = f.serialize(g),
            p = g ? {
                status: {
                    loggedIn: !0
                },
                user: Object(n["a"])(Object(n["a"])({}, h), {}, {
                    photo: _ || h.photo
                })
            } : {
                status: {
                    loggedIn: !1
                },
                user: null
            },
            v = function () {
                "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                    e.pushManager.getSubscription().then((function (e) {
                        e && e.unsubscribe()
                    }))
                }))
            },
            b = {
                namespaced: !0,
                state: p,
                actions: {
                    login: function (e, t) {
                        return Object(o["a"])(regeneratorRuntime.mark((function a() {
                            var i, r;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return i = e.commit, a.prev = 1, a.next = 4, Object(s["b"])(t);
                                    case 4:
                                        return r = a.sent, i("loginSuccess", r.data), a.abrupt("return", Promise.resolve());
                                    case 9:
                                        return a.prev = 9, a.t0 = a["catch"](1), i("loginFailure"), a.abrupt("return", Promise.reject(a.t0));
                                    case 13:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [1, 9]
                            ])
                        })))()
                    },
                    logout: function (e) {
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            var a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.commit, t.prev = 1, t.next = 4, Object(s["c"])();
                                    case 4:
                                        t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t["catch"](1), console.log(t.t0);
                                    case 9:
                                        return a("logout"), t.abrupt("return", Promise.resolve());
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 6]
                            ])
                        })))()
                    },
                    updateUserImg: function (e, t) {
                        var a = e.commit;
                        a("updateImg", t)
                    }
                },
                mutations: {
                    loginSuccess: function (e, t) {
                        localStorage.setItem("user", JSON.stringify(t)), e.status.loggedIn = !0, e.user = f.serialize(t)
                    },
                    loginFailure: function (e) {
                        localStorage.removeItem("user"), localStorage.removeItem("userImg"), localStorage.removeItem("lastPage"), e.status.loggedIn = !1, e.user = null, c["a"].close(), v()
                    },
                    logout: function (e) {
                        localStorage.removeItem("user"), localStorage.removeItem("userImg"), localStorage.removeItem("lastPage"), e.status.loggedIn = !1, e.user = null, c["a"].close(), v()
                    },
                    updateImg: function (e, t) {
                        localStorage.setItem("userImg", t), e.user.photo = t
                    }
                },
                getters: {
                    loggedIn: function (e) {
                        return e.status.loggedIn
                    },
                    user: function (e) {
                        return e.user
                    }
                }
            },
            w = (a("b64b"), a("07ac"), JSON.parse(localStorage.getItem("camview-layouts"))),
            y = {
                layout: w || {}
            },
            k = {
                namespaced: !0,
                state: y,
                actions: {
                    updateElements: function (e, t) {
                        var a = e.commit;
                        return a("updateElements", t), w
                    }
                },
                mutations: {
                    updateElements: function (e, t) {
                        var a = JSON.parse(localStorage.getItem("camview-layouts")) || {};
                        a[Object.keys(t)[0]] = Object.values(t)[0], localStorage.setItem("camview-layouts", JSON.stringify(a)), e.layout = a
                    }
                }
            },
            S = (a("99af"), a("caad"), a("2532"), a("12cb")),
            x = a("5cf0"),
            T = {
                ui: !1
            },
            A = {
                namespaced: !0,
                state: T,
                actions: {
                    loadConfig: function (e) {
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
                            var a, i, r, o, n, s;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.commit, t.prev = 1, t.next = 4, Object(x["c"])();
                                    case 4:
                                        i = t.sent, a("saveConfig", i.data), r = localStorage.getItem("language"), a("setLang", r), o = localStorage.getItem("theme") ? localStorage.getItem("theme").split("-")[0] : "dark", n = localStorage.getItem("theme-color") || "pink", s = "auto" === localStorage.getItem("darkmode"), s && (o = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), a("setTheme", "".concat(o, "-").concat(n)), t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t["catch"](1), console.log(t.t0);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 15]
                            ])
                        })))()
                    }
                },
                mutations: {
                    saveConfig: function (e, t) {
                        e.ui = Object(n["a"])(Object(n["a"])({}, t), {}, {
                            currentLanguage: S["a"].locale,
                            validLangs: S["b"],
                            validThemes: ["light-blue", "light-blgray", "light-brown", "light-green", "light-gray", "light-orange", "light-pink", "light-purple", "dark-blue", "dark-blgray", "dark-brown", "dark-green", "dark-gray", "dark-orange", "dark-pink", "dark-purple"]
                        })
                    },
                    setLang: function (e, t) {
                        if (t || (t = S["a"].locale), t = Object(S["d"])(t), t in S["a"].messages) S["a"].locale = t;
                        else {
                            var a = Object(S["c"])(t);
                            S["a"].setLocaleMessage(t, a[t]), S["a"].locale = t
                        }
                        e.ui.currentLanguage = t, localStorage.setItem("language", t)
                    },
                    setTheme: function (e, t) {
                        if (e.ui.validThemes.includes(t)) {
                            var a = t.split("-")[0],
                                i = t.split("-")[1];
                            document.documentElement.dataset.theme = a, document.documentElement.dataset.themeColor = i, localStorage.setItem("theme", a), localStorage.setItem("theme-color", i)
                        }
                    }
                },
                getters: {
                    getConfig: function (e) {
                        return e.ui
                    }
                }
            },
            C = JSON.parse(localStorage.getItem("dashboard-layout")),
            P = {
                layout: C || []
            },
            z = {
                namespaced: !0,
                state: P,
                actions: {
                    updateElements: function (e, t) {
                        var a = e.commit;
                        return a("updateElements", t), C
                    }
                },
                mutations: {
                    updateElements: function (e, t) {
                        localStorage.setItem("dashboard-layout", JSON.stringify(t)), e.layout = t
                    }
                }
            },
            L = {
                size: 0
            },
            N = {
                namespaced: !0,
                state: L,
                actions: {
                    socket_notification: function (e, t) {
                        var a = e.commit;
                        t.count && a("increaseNotifications")
                    },
                    socket_increaseNotification: function (e) {
                        var t = e.commit;
                        t("increaseNotifications")
                    },
                    socket_notificationSize: function (e, t) {
                        var a = e.commit;
                        a("updateNotifications", t)
                    },
                    socket_removeNotification: function (e) {
                        var t = e.commit;
                        t("decreaseNotifications")
                    },
                    decrease: function (e) {
                        var t = e.commit;
                        t("decreaseNotifications")
                    },
                    removeAll: function (e) {
                        var t = e.commit;
                        t("updateNotifications", 0)
                    }
                },
                mutations: {
                    decreaseNotifications: function (e) {
                        e.size--
                    },
                    increaseNotifications: function (e) {
                        e.size++
                    },
                    updateNotifications: function (e, t) {
                        e.size = t
                    }
                },
                getters: {
                    getSize: function (e) {
                        return e.size
                    }
                }
            };
        i["a"].use(r["a"]);
        t["a"] = new r["a"].Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {
                auth: b,
                camview: k,
                config: A,
                dashboard: z,
                notifications: N
            }
        })
    },
    "4c1e": function (e) {
        e.exports = JSON.parse('{"nl":{"account":"Account","account_nav_info":"Beheer uw gegevens zoals uw gebruikersnaam en wachtwoord","active":"Actief","add":"Toevoegen","add_camera":"Camera toevoegen","add_labels":"Label toevoegen","add_new_camera":"Een nieuwe camera toevoegen","add_new_user":"Nieuwe gebruikers toevoegen","add_to_homescreen":"Toevoegen aan beginscherm","admin":"Administrator","alarm":"Alarm","alarm_ftp_info":"FTP Server moet ingeschakeld zijn om een beweging teweeg te brengen via bestandsupload!","alarm_http_info":"HTTP Server moet ingeschakeld zijn om een beweging via HTTP te starten!","alarm_http_reset_info":"HTTP Server moet ingeschakeld zijn om een beweging te resetten via HTTP oproep!","alarm_smtp_info":"SMTP Server moet ingeschakeld zijn om een beweging via Email te triggeren!","alexa":"Alexa","all":"All","all_notifications_removed":"Alle meldingen zijn verwijderd","all_recordings_removed":"Alle opnames zijn gewist","amazon_rekognition":"Amazon Rekognition","analyze_duration":"Analyseren Duur","analyze_duration_info":"Specify how many microseconds are analyzed to probe the input. A higher value will enable detecting more accurate information, but will increase latency. It defaults to 5,000,000 microseconds = 5 seconds (-analyzeduration).","appearance":"Uiterlijk","appearance_nav_info":"Wijzig de taal of het uiterlijk van de interface","apply":"Overnemen","april":"April","at_home":"Thuis","at_home_switch":"Thuis Schakel","atleast_one_permission_required":"Tenminste één toestemming moet worden geselecteerd","audio":"Audio","audio_codec":"Audio Codec","audio_codec_info":"Set the codec used for encoding audio sent to HomeKit for HSV, must be AAC-based (-acodec).","audio_codec_info_hksv":"Set the codec used for encoding audio for HKSV, must be AAC-based (-acodec).","audio_info":"Enables audio streaming from camera.","audio_info_hksv":"Enables audio for HKSV recordings.","august":"Augustus","auto":"Auto","auto_darkmode":"Auto Darkmode","automated_backup":"Geautomatiseerde back-up","automation":"Automatisering","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_contingent_left":"Contingent Übrig","aws_contingent_total":"Contingent Total","aws_last_rekognition":"Last Rekognition","aws_region":"Region","aws_secret_access_key":"Secret Access Key","back":"Terug","backup":"Backup","backup_and_restore":"Back-up & Herstel","backup_download":"Download Backup","backup_file":"Backup Bestand","backup_info_download":"Download een backup archief van uw gehele camera.ui omgeving. Dit zal een back-up maken van de gehele inhoud (inclusief opnames) van uw camera.ui opslagmap. U kunt dit later herstellen op elk platform waarop camera.ui draait","backup_info_restore":"Herstel een backup archief dat u eerder hebt gemaakt met camera.ui. Uw camera.ui-configuratie, database, opnamen en camera.ui-gebruikersaccounts worden hersteld","backup_info_shedule":"Een volledige backup van de camera.ui database wordt automatisch elke dag om 12:00:00 gemaakt en 7 dagen bewaard","backup_nav_info":"Creëer en beheer de back-ups vanuit de interface","backup_restore":"Restore Backup","backup_restored":"Backup restored","backup_shedule":"Back-up schema","banner_text_doorbell":"Deurbel afgegaan","banner_text_motion":"Nieuwe beweging gedetecteerd","base":"Basis","bitrate":"Bitrate","bitrate_info":"The bitrate used for video stream.","bitrate_info_hksv":"The maximum bitrate used HKSV, in kbit/s. If not set, will use any bitrate HomeKit requests (-b:v).","blgray":"Blauw Grijs","blue":"Blauw","blue_gray":"Blauw Grijs","brown":"Bruin","browse":"Bladeren","camera":"Camera","camera_alarm_info":"Instellingen voor bewegingsdetectie","camera_already_exists":"Camera bestaat al","camera_ffmpeg_stream_info":"FFmpeg en Stream Instellingen","camera_homebridge_info":"Camera Homebridge Instellingen","camera_interface_info":"Instellingen Camera Interface","camera_notification_info":"Instellingen Camera Melding","camera_player_info":"Interface Videospeler Parameters","camera_prebuffering_info":"Camera Stream Prebuffering","camera_rekognition_info":"Beeldanalyse voor bewegingsdetectie","camera_settings_save_info":"Velden gemarkeerd met (¹) kunnen alleen worden opgeslagen door op de knop \\"✓\\" te klikken","camera_videoanalysis_info":"camera.ui Bewegingsdetectiesysteem","cameras":"Camera\'s","cameras_nav_info":"Beheer de streamingparameters van de camera\'s","cameras_to_exclude_from_athome":"Camera\'s om \'thuis\' uit te sluiten","camview":"Camview","cancel":"Annuleren","cannot_change_pw":"Wachtwoord kan niet worden gewijzigd","cannot_login":"Gebruikersnaam en/of wachtwoord zijn onjuist","change":"Verander","change_your_password":"Wijzig uw wachtwoord","charts":"Charts","clear":"Delete","close":"Close","color":"Kleur","confidence":"Confidence","config":"Config","config_information":"config.json","config_was_saved":"De configuratie werd opgeslagen","connected":"Aangesloten","console":"Console","cpu_load":"CPU Belasting","cpu_temperature":"CPU Temperatuur","create_zipped_backup_file":"Maak een gezipt back-upbestand","custom":"Custom","dark":"Dark","darkmode":"Darkmode","dashboard":"Dashboard","database":"Database","database_information":"Databank Informatie","database_resetted":"Database werd gereset","day":"Dag","days":"Dagen","debug":"Debug","debug_info":"Includes debugging output from the main FFmpeg process in the log.","december":"December","disable_info":"Disables the camera and removes it from HomeKit.","disabled":"Uitgeschakeld","disk_load":"Disk Load","disk_space":"Disk Space","domain":"Domain","doorbell":"Deurbel","doorbellSensor_info":"Exposes the doorbell device for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","download":"Download","download_backup_archive":"Back-up archief downloaden","download_failed":"Download mislukt","drop_files_here":"Drop files here","drop_widgets_here":"Drop widgets here","dwell_time":"Stilstandtijd","dwell_time_info":"Stilstandtijd betekent dat nadat een bewegingsdetector is geactiveerd, deze een periode van N seconden nodig heeft waarin geen beweging wordt waargenomen om terug te keren naar de standaard detectiemodus. Dit voorkomt dat de sensor meerdere waarschuwingen afgeeft voor dezelfde beweging","email":"Email","email_body_lookup":"Zoek email voor","email_body_lookup_info":"If camera.ui can\'t find out the name of the camera by the email address, you can enter a term here so that camera.ui can search the text content of the email for this term and thus assign the camera","email_from":"Email van","email_from_info":"The email from address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","email_to":"Email naar","email_to_info":"The email to address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","empty":"Empty","enabled":"Activeert","encoder_options":"Encoder Opties","encoder_options_info":"Options to be passed to the video encoder.","encoder_options_info_hksv":"Options to be passed to the video encoder for the HKSV recording process.","endpoints":"Endpunkte","enter_new_password":"Voer een nieuw wachtwoord in","error":"Fout","exclude":"Exclusief","excludeSwitch_info":"Exposes a \'exclude\' switch to HomeKit to exclude/include the camera from the interface settings within HomeKit.","existing_rooms":"Bestaande kamers","favourite":"Favorit","favourites":"Favoriten","february":"Februari","ffmpeg_and_stream":"FFmpeg en Stream","field_must_not_be_empty":"Het veld mag niet leeg zijn","fill_all_required_fields":"Gelieve alle verplichte velden in te vullen","filter":"Filter","filters":"Filter","finish":"Einde","finish_zone":"Finish Zone","forceClose_timer":"Reset beweging na","forceClose_timer_info":"Timer in minuten die automatisch de constante detectie van beweging onderbreekt (reset) na N minuten. 0 = Uitgeschakeld. Let op: Als de timer gedeactiveerd is, is het aan de camera WANNEER de bewegingsdetectie als \\"voltooid\\" wordt beschouwd en dus de opname wordt gestopt. Dit kan leiden tot zeer lange opnames!","forgotpw_content":"Als u uw wachtwoord bent vergeten, kunt u het herstellen door de database te wissen of een back-up te importeren.","forgotpw_title":"Wachtwoord vergeten?","fps":"FPS","fps_info":"The fps used for video stream.","fps_info_hksv":"The maximum frame rate used for HKSV. If not set, will use any size HomeKit requests (-r).","free_disk_space":"Free Disk Space","friday":"Vrijdag","from":"Van","ftp":"FTP","ftp_absolute_path":"FTP absoluut pad","ftp_server_config":"FTP Server Configuratie","fullscreen":"Fullscreen","general":"Algemeen","general_information":"Algemene informatie","general_settings":"Algemene Instellingen","go_back":"Terug","gray":"Grijs","green":"Groen","height":"Video Hoogte","height_info":"The height used for video stream.","height_info_hksv":"The maximum height used for HKSV. If not set, will use any size HomeKit requests (-s).","help_started":"Om u op weg te helpen en een goede ervaring met camera.ui te bieden, verzoeken wij u de volgende configuratie uit te voeren.","homebridge_restart_info":"Om de velden gemarkeerd met (²) te wijzigen, moet Homebridge opnieuw worden opgestart","host":"Host","hour":"Uur","hours":"Uren","http":"HTTP","http_server_config":"HTTP Server Configuratie","image":"Beeld","inactive":"Inactief","interface":"Interface","interface_appearance":"Interface Uiterlijk","interface_config":"Interface configuratie","interface_language":"Taal van de interface","interface_nav_info":"Creëer nieuwe kamers of maak andere instellingen","interface_player":"Interface Speler","invalid_password":"Ongeldig wachtwoord","invalid_username":"Ongeldige gebruikersnaam","january":"Januari","july":"Juli","june":"Juni","label":"Label","labels":"Labels","language":"Taal","last_changed":"Laatst gewijzigd","last_notification":"Laatste kennisgeving","last_recording":"Laatste opname","last_updated":"Laatst gewijzigd","light":"Helder","list_of_existing_user":"Lijst van geregistreerde gebruikers","live":"Live","livestream":"Livestream","livestream_snapshot":"Schakelt tussen live stream of snapshot interval","load":"Belasting","localhost":"Localhost","localhttp":"Lokaal HTTP","location":"Locatie","log":"Log","login":"Login","loglevel":"Log Level","loglevel_info":"Show only defined log level (Info = Show informative messages during processing. This is in addition to warnings and errors - Debug: Show everything, including debugging information - Warning: Show only warnings and errors - Error: Show only errors)","manufacturer_info":"Set the manufacturer name for display in the Home app","map_audio":"Audio Stream","map_audio_info":"Selects the stream used for audio (-map).","map_video":"Video Stream","map_video_info":"Selects the stream used for video (-map).","march":"Maart","mark_all_as_read":"Markeer alles als gelezen","master":"Meester","max_delay":"Maximale vertraging","max_delay_info":"When receiving data over UDP, the demuxer tries to reorder received packets (since they may arrive out of order, or packets may get lost totally). This can be disabled by setting the maximum demuxing delay to zero (-max_delay).","max_streams":"Max. stromen","max_streams_info":"The maximum number of streams that will be allowed at once to this camera.","may":"Mei","memory":"Memory","memory_load":"Memory Belasting","message":"Bericht","mode":"Modus","model_info":"Set the model for display in the Home app","monday":"Maandag","motion":"Beweging","motionDoorbellSwitch_info":"Enables dummy switches to trigger motion and/or doorbell, if either of those are enabled. When enabled there will be an additional switch that triggers the motion or doorbell event.","motionDoorbell_info":"Rings the doorbell when motion is activated. This allows for motion alerts to appear on Apple TVs.","motionSensor_info":"Exposes the motion sensor for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","motion_message":"Kennisgeving van beweging","motion_reset":"Geen motie","motion_timeout":"Time-out beweging","motion_timeout_info":"The number of seconds after triggering to reset the motion sensor. Set to 0 to disable resetting of motion trigger.","movement_detected":"Beweging gevangen","movement_on":"Beweging op","mqtt":"MQTT","mqtt_config":"MQTT Configuratie","mqtt_publish_topic":"MQTT Publish Topic","name":"Naam","never":"Never","new":"Nieuw","new_content_available":"New content is available","new_password":"Nieuw paswoord","new_password_verify":"Bevestig nieuw wachtwoord","new_room":"Nieuwe kamer","new_zone":"Nieuwe zone","next":"Volgende","no_access":"Geen toegangsautorisatie","no_camera_selected":"Geen camera geselecteerd","no_cameras":"Geen camera\'s","no_data":"No Data","no_data_available":"Geen gegevens beschikbaar","no_feed":"No Feed","no_file_selected":"No file selected","no_label":"Geen label","no_label_matching":"Geen etiket gevonden voor","no_more_cameras":"Geen camera\'s meer","no_more_data":"Geen verdere gegevens","no_more_notifications":"Geen verdere kennisgevingen","no_more_recordings":"Geen verdere opnames","no_notifications":"Geen meldingen","no_password_defined":"Geen wachtwoord gedefinieerd","no_permissionlevel_defined":"Toegangsbevoegdheid niet gedefinieerd","no_recordings":"Geen opnames","no_registered_user":"Geen geregistreerde gebruiker","no_results":"No results","no_roomname_defined":"Geen kamernaam gedefinieerd","no_title":"Geen titel","no_username_defined":"Gebruikersnaam niet gedefinieerd","notfound_message":"Sorry, de pagina die u zoekt bestaat niet.","notification":"Kennisgeving","notification_text":"@ heeft een nieuwe beweging in de ruimte gevangen %","notifications":"Kennisgevingen","notifications_alert":"You have a total of % notifications","notifications_nav_info":"Beheer de Alexa, Telegram en webhook instellingen","november":"November","now":"Now","npm":"NPM","october":"Oktober","offline":"Offline","ok":"Ok","old_password":"Oud paswoord","online":"Online","options":"Opties","orange":"Oranje","page_not_found":"De door u opgevraagde pagina kon niet worden gevonden.","password":"Wachtwoord","password_is_required":"Wachtwoord is vereist","password_not_match":"Wachtwoord komt niet overeen","password_reenter":"Wachtwoord opnieuw invoeren","path_is_required":"Pad is vereist","path_to_certificate":"Pad naar certificaat","path_to_key":"Pad naar sleutel","permission":"Toestemming","permission_required":"Toestemming nodig","permissions":"Machtigingen","ping_timeout":"Ping Timeout","pink":"Roze","pixel_difference":"Pixel/Kleur Verschil","pixel_difference_info":"Het kleurverschil dat nodig is om beweging op een pixel te veroorzaken (Hoe kleiner de waarde, hoe kleiner het kleurverschil en hoe groter de waarde, hoe groter het kleurverschil dat nodig is om het als beweging te registreren)","plugins":"Plugins","port":"Port","prebuffering":"Prebuffering","prebuffering_info":"Enables camera video prebuffering.","press_enter_to_create":"Druk op %Enter% om een nieuw label te maken","prev":"Vorige","privacyMode_info":"Turn off the camera feed and replace it with a privacy image in HomeKit","privacySwitch_info":"Exposes a \'privacyMode\' switch to replace the camera feed with a privacy image in HomeKit","probe_size":"Probe Size","probe_size_info":"Set probing size in bytes, i.e. the size of the data to analyze to get stream information. A higher value will enable detecting more information in case it is dispersed into the stream, but will increase latency. Must be an integer not lesser than 32. It is 5000000 by default (-probesize).","process":"Proces","profile":"Profile","purple":"Paars","read_rate":"Read Rate","read_rate_info":"Read input at native frame rate (-re).","reconnect":"Opnieuw verbinden","record_on_movement":"Opname van beweging door UI","record_on_movement_info":"Enables recording video (eg on movement) through UI and NOT through external controller.","recording":"Opname","recording_text":"De @ werd genomen op % door een #.","recording_time":"Opnametijd","recording_timer_not_editable":"De opnametijd kan niet worden bewerkt. Instellingen kunnen worden gewijzigd in config.json.","recording_type":"Opnametype","recording_type_not_editable":"Opnametype kan niet worden bewerkt. Instellingen kunnen worden gewijzigd in config.json.","recordings":"Opnames","recordings_alert":"You have % recordings in total and # recordings were selected","recordings_nav_info":"De opname-instellingen beheren en het opnametype specificeren","refresh":"Refresh","registered_user":"Geregistreerde gebruikers","rekognition":"Rekognition","rekognition_nav_info":"Beeldanalyse op bewegingsdetectie via Amazon Rekognition","release_notes":"Release Notes","reload":"Herladen","remove":"Wissen","remove_after":"Schrappen na","remove_all":"Alles wissen","remove_all_confirm":"Confirm remove all","remove_all_confirm_text":"After clicking \'Remove all\' all stored @ will be irrevocably deleted. Are you sure?","remove_camera":"Camera verwijderen","remove_camera_confirm_text":"Wil je echt de camera \'@\' verwijderen?","remove_camera_confirm_text_homebridge":"Wilt u echt de camera \'@\' verwijderen? Dit zal de camera ook van Homebridge verwijderen!","removed":"verwijderd","reorder_queue_size":"Reorder Queue Size","reorder_queue_size_info":"Packets may be received out of order, so before they can be passed onwards, they need to be reordered. Default jitter buffer size is 500. This option allows you to specify it manually. Higher values will lead to greater latency. Only applicable for reception over UDP (-reorder_queue_size).","reports":"Verslagen","reset":"Reset","reset_confirm":"Bevestig reset","reset_confirm_text":"Na het klikken op \'Reset\' zullen alle opgeslagen gegevens onherroepelijk worden gewist. Ben je zeker?","restart":"Herstarten","restart_cameraui":"Start camera.ui opnieuw op","restart_confirm":"Bevestig herstart","restart_confirm_text":"Wil je echt dat @ opnieuw begint?","restore":"Herstel","restore_from_backup_file":"Herstellen vanuit back-uparchief","room":"Kamer","room_already_exists":"Kamer bestaat al","room_name":"Kamernaam","rooms":"Kamers","rss":"RSS","rss_feed":"RSS Feed","rss_feed_widget_info":"Voer een geldige RSS URL in om de feed in de widget te zien.","rss_url":"RSS URL","rtsp_transport":"RTSP Transport","rtsp_transport_info":"Set RTSP transport protocols (-rtsp_transport).","saturday":"Zaterdag","save":"Opslaan","save_as":"Opslaan als","save_path":"Red Pfad","seconds":"Seconden","select":"Auswählen","selected":"selected","selected_camera":"Geselecteerde camera","sensitivity":"Gevoeligheid","sensitivity_info":"Het percentage pixels (zie Verschil) dat nodig is om een beweging te activeren (een lage gevoeligheid betekent dat meer pixelverschillen moeten worden gedetecteerd, een hoge gevoeligheid dat minder pixelverschillen moeten worden gedetecteerd)","september":"September","serialNr":"Seriennummer","serialNumber_info":"Set the serial number for display in the Home app","server":"Server","server_information":"Server Informatie","settings":"Instellingen","shortcuts":"Shortcuts","shortcuts_widget_info":"Selecteer de actie uit de lijst om deze in de snelkoppelingen te tonen.","signin":"Inloggen","signout":"Uitloggen","signout_after":"Uitloggen na","smtp":"SMTP","smtp_server_config":"SMTP Server Configuratie","snapshot":"Snapshot","snapshot_timer":"Snapshot Timer","source":"Videobron","source_info":"FFmpeg options on where to find and how to decode your camera\'s video stream. The most basic form is \'-i\' followed by your camera\'s URL.","source_info_hksv":"Here you can set a custom video source for HKSV recordings only.","space_replace":"Ruimte vervangen","speaker_end_time":"Sprekers verklaring tot","speaker_start_time":"Sprekers verklaring van","ssl":"SSL","ssl_config":"SSL Configuratie","standard":"Standaard","start":"Lancering","start_end_message":"En dat is het. <br> Veel plezier met camera.ui!","start_info_message":"U moet uw inloggegevens <br> wijzigen voordat u inlogt op camera.ui","status":"Status","still_image_source":"Beeld Bron","still_image_source_info":"If your camera also provides a URL for a still image, that can be defined here with the same syntax as \'source\'. If not set, camera.ui will grab one frame from \'source\'.","stop":"Stop","stream_timeout":"Stream Timeout","sub_source_info":"Low Resolution Substream. FFmpeg options on where to find and how to decode your camera\'s video substream. The most basic form is \'-i\' followed by your camera\'s URL. The substream will be used to probe the stream or for motion detection through video analysis.","successfull":"Succesvol","successfully_added_camera":"Camera is succesvol toegevoegd","successfully_changed":"Met succes veranderd","successfully_created":"Succesvol gemaakt","successfully_removed":"Succesvol verwijderd","sunday":"Zondag","sunny":"Zonnig","system":"Systeem","system_nav_info":"Beheer de backend instellingen van camera.ui","system_restart_initiated":"Systeem herstart werd gestart","system_successfully_restarted":"Systeem werd succesvol opnieuw opgestart","system_successfully_updated":"Systeem werd succesvol bijgewerkt","system_update_initiated":"Systeemupdate werd gestart","telegram":"Telegram","telegram_message_type":"Telegram Bericht Type","telegram_type_not_editable":"Telegram kan niet worden gewijzigd voor deze camera.","temperature":"Temperatuur","text":"Text","theme":"Thema","themes":"Themes","thursday":"Donderdag","time":"Tijd","timeout":"Timeout","timeout_info":"Socket TCP I/O timeout in seconds. If you have problems with hanging FFmpeg processes in the background, you can enter any value here to stop the process automatically after the entered time, if no response comes (-stimeout).","timerange":"Time Range","timestamp":"Tijdstempel","to":"Tot","total":"Total","tuesday":"Dinsdag","type":"Type","unbridge_info":"Bridged cameras can cause slowdowns of the entire Homebridge instance. If unbridged, the camera will need to be added to HomeKit manually.","undo":"Undo","up_to_date":"Huidige","update":"Updaten","update_available":"Update beschikbaar","update_or_downgrade":"Bijwerken/Downgraden","upload_backup_archive":"Back-up archief uploaden","uptime":"Uptime","use_interface_timer":"Interface Recording Timer","use_interface_timer_info":"If enabled, the recording timer from camera.ui will be used for \\"motionTimeout\\".","user":"Gebruiker","user_list":"Gebruikerslijst","username":"Gebruikersnaam","username_already_exists":"Gebruikersnaam bestaat al","username_is_required":"Gebruikersnaam is vereist","users":"Gebruikers","users_nav_info":"Verwijder bestaande gebruikers of maak nieuwe gebruikers aan","utilization":"Bezettingsgraad","verification_not_successfull":"Verificatie niet succesvol","version":"Version","video":"Video","video_codec":"Video Codec","video_codec_info":"Set the codec used for encoding video sent to HomeKit, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_codec_info_hksv":"Set the codec used for encoding video for HKSV, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_filter":"Video filter","video_filter_info":"Comma-delimited list of additional video filters for FFmpeg to run on the video. If \'none\' is included, the default video filters are disabled (-filter:v).","video_processor_config":"Video Processor Configuratie","video_processor_path":"Video Processor Pad","video_resolution":"Video Resolutie","videoanalysis":"Videoanalyse","videoanalysis_info":"Activates Video Analysis for motion detection (a low resolution sub stream is preferred or prebuffering enabled)","warning":"Waarschuwing","weather":"Weer","weather_widget_info":"Zoek op uw plaatsnaam in het Engels om de weerwidget te activeren.","weather_widget_info_owm":"Weersgegevens worden verstrekt door OpenWeather.","webhook":"Webhook","webhook_url":"Webhook URL","wednesday":"Woensdag","welcome_back":"Welkom terug","welcome_message":"Welkom bij","welcome_submessage":"De webinterface voor uw RTSP-camera\'s","widgets":"Widgets","width":"Video Breedte","width_info":"The width used for video stream.","width_info_hksv":"The maximum width used for HKSV. If not set, will use any size HomeKit requests (-s).","yellow":"Geel"}}')
    },
    "4c86": function (e) {
        e.exports = JSON.parse('{"en":{"account":"Account","account_nav_info":"Manage your data like your username and password","active":"Active","add":"Add","add_camera":"Add Camera","add_labels":"Add Label","add_new_camera":"Add new Camera","add_new_user":"Add new user","add_to_homescreen":"Add to Homescreen","admin":"Administrator","alarm":"Alarm","alarm_ftp_info":"FTP Server must be enabled to trigger a movement through file upload!","alarm_http_info":"HTTP Server must be enabled to trigger a movement through HTTP call!","alarm_http_reset_info":"HTTP Server must be enabled to reset a movement through HTTP call!","alarm_smtp_info":"SMTP Server must be enabled to trigger a movement through Email!","alexa":"Alexa","all":"All","all_notifications_removed":"All notifications were removed","all_recordings_removed":"All recordings were removed","amazon_rekognition":"Amazon Rekognition","analyze_duration":"Analyze Duration","analyze_duration_info":"Specify how many microseconds are analyzed to probe the input. A higher value will enable detecting more accurate information, but will increase latency. It defaults to 5,000,000 microseconds = 5 seconds (-analyzeduration).","appearance":"Appearance","appearance_nav_info":"Change the language or the appearance of the interface","apply":"Apply","april":"April","at_home":"At Home","at_home_switch":"At Home Switch","atleast_one_permission_required":"Atleast one permission must be selected","audio":"Audio","audio_codec":"Audio Codec","audio_codec_info":"Set the codec used for encoding audio sent to HomeKit for HSV, must be AAC-based (-acodec).","audio_codec_info_hksv":"Set the codec used for encoding audio for HKSV, must be AAC-based (-acodec).","audio_info":"Enables audio streaming from camera.","audio_info_hksv":"Enables audio for HKSV recordings.","august":"August","auto":"Auto","auto_darkmode":"Auto Darkmode","automated_backup":"Automated Backup","automation":"Automation","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_contingent_left":"Contingent Left","aws_contingent_total":"Contingent Total","aws_last_rekognition":"Last Rekognition","aws_region":"Region","aws_secret_access_key":"Secret Access Key","back":"Back","backup":"Backup","backup_and_restore":"Backup & Restore","backup_download":"Download Backup","backup_file":"Backup File","backup_info_download":"Download a backup archive of your entire camera.ui environment. This will backup the entire contents (including recordings) of your camera.ui storage directory. You can restore this later on any platform on which camera.ui is running","backup_info_restore":"Restore a backup archive you previously made using camera.ui. Your camera.ui config, database, recordings and camera.ui user accounts will be restored","backup_info_shedule":"A full backup of the camera.ui database is automatically created every day at 12:00:00 and kept for 7 days","backup_nav_info":"Create and manage the backup copies from the interface","backup_restore":"Restore Backup","backup_restored":"Backup restored","backup_shedule":"Backup Shedule","banner_text_doorbell":"Doorbel was triggered","banner_text_motion":"New motion detected","base":"Base","bitrate":"Bitrate","bitrate_info":"The bitrate used for video stream.","bitrate_info_hksv":"The maximum bitrate used HKSV, in kbit/s. If not set, will use any bitrate HomeKit requests (-b:v).","blgray":"Blue Gray","blue":"Blue","blue_gray":"Blue Gray","brown":"Brown","browse":"Browse","camera":"Camera","camera_alarm_info":"Motion Detection Settings","camera_already_exists":"Camera already exists","camera_ffmpeg_stream_info":"FFmpeg und Stream Settings","camera_homebridge_info":"Camera Homebridge Settings","camera_interface_info":"Camera Interface Settings","camera_notification_info":"Camera Notification Settings","camera_player_info":"Interface Video Player Parameter","camera_prebuffering_info":"Camera Stream Prebuffering","camera_rekognition_info":"Image analysis on movement detection","camera_settings_save_info":"Fields marked with (¹) can be saved only by clicking the \\"✓\\" button","camera_videoanalysis_info":"camera.ui Motion detection system","cameras":"Cameras","cameras_nav_info":"Manage the streaming parameters of the cameras","cameras_to_exclude_from_athome":"Cameras to exclude from \'At Home\'","camview":"Camview","cancel":"Cancel","cannot_change_pw":"Can not change password","cannot_login":"Username and/or password are incorrect","change":"Change","change_your_password":"Change your Password","charts":"Charts","clear":"Clear","close":"Close","color":"Color","confidence":"Confidence","config":"Config","config_information":"config.json","config_was_saved":"Config was saved","connected":"Connected","console":"Console","cpu_load":"CPU Load","cpu_temperature":"CPU Temperature","create_zipped_backup_file":"Create a zipped backup file","custom":"Custom","dark":"Dark","darkmode":"Darkmode","dashboard":"Dashboard","database":"Database","database_information":"Database Information","database_resetted":"Database resetted","day":"Day","days":"Days","debug":"Debug","debug_info":"Includes debugging output from the main FFmpeg process in the log.","december":"December","disable_info":"Disables the camera and removes it from HomeKit.","disabled":"Disabled","disk_load":"Disk Load","disk_space":"Disk Space","domain":"Domain","doorbell":"Doorbell","doorbellSensor_info":"Exposes the doorbell device for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","download":"Download","download_backup_archive":"Download Backup Archive","download_failed":"Download failed","drop_files_here":"Drop files here","drop_widgets_here":"Drop widgets here","dwell_time":"Dwell Time","dwell_time_info":"Dwell time means that after a Motion Detector is tripped it will need a N-seconds period in which it detects no motion in order to \\"reset\\" back to its default detection mode. This prevents the sensor from sending out multiple alerts for the same motion","email":"Email","email_body_lookup":"Seach email for","email_body_lookup_info":"If camera.ui can\'t find out the name of the camera by the email address, you can enter a term here so that camera.ui can search the text content of the email for this term and thus assign the camera","email_from":"Email from","email_from_info":"The email from address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","email_to":"Email to","email_to_info":"The email to address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","empty":"Empty","enabled":"Enabled","encoder_options":"Encoder Options","encoder_options_info":"Options to be passed to the video encoder.","encoder_options_info_hksv":"Options to be passed to the video encoder for the HKSV recording process.","endpoints":"Endpoints","enter_new_password":"Please enter a new password","error":"Error","exclude":"Exclude","excludeSwitch_info":"Exposes a \'exclude\' switch to HomeKit to exclude/include the camera from the interface settings within HomeKit.","existing_rooms":"Existing Rooms","favourite":"Favourite","favourites":"Favourites","february":"February","ffmpeg_and_stream":"FFmpeg and Stream","field_must_not_be_empty":"Field must not be empty","fill_all_required_fields":"Please fill all required fields","filter":"Filter","filters":"Filters","finish":"Finish","finish_zone":"Finish Zone","forceClose_timer":"Reset motion after","forceClose_timer_info":"Timer in minutes that automatically interrupts (resets) the constant detection of motion after N minutes. 0 = Disabled. Attention: If the timer is deactivated, it is up to the camera WHEN the motion detection is considered \\"finished\\" and thus the recording is stopped. This can lead to very long recordings!","forgotpw_content":"If you have forgotten your password, you can restore it by deleting the database or importing a backup.","forgotpw_title":"Forgot password?","fps":"FPS","fps_info":"The fps used for video stream.","fps_info_hksv":"The maximum frame rate used for HKSV. If not set, will use any size HomeKit requests (-r).","free_disk_space":"Free Disk Space","friday":"Friday","from":"From","ftp":"FTP","ftp_absolute_path":"FTP Absolute Path","ftp_server_config":"FTP Server Configuration","fullscreen":"Fullscreen","general":"General","general_information":"General Information","general_settings":"General Settings","go_back":"Back","gray":"Gray","green":"Green","height":"Video Height","height_info":"The height used for video stream.","height_info_hksv":"The maximum height used for HKSV. If not set, will use any size HomeKit requests (-s).","help_started":"To help you get started and provide good experience with camera.ui, please complete the following configuration.","homebridge_restart_info":"Changing the fields marked with (²) requires restart of Homebridge","host":"Host","hour":"Hour","hours":"Hours","http":"HTTP","http_server_config":"HTTP Server Configuration","image":"Image","inactive":"Inactive","interface":"Interface","interface_appearance":"Interface Appearance","interface_config":"Interface Configuration","interface_language":"Interface Language","interface_nav_info":"Create new rooms or make other settings","interface_player":"Interface Player","invalid_password":"Invalid Password","invalid_username":"Invalid Username","january":"January","july":"July","june":"June","label":"Label","labels":"Labels","language":"Language","last_changed":"Last modified","last_notification":"Last notification","last_recording":"Last recording","last_updated":"Last Updated","light":"Light","list_of_existing_user":"List of registered user","live":"Live","livestream":"Livestream","livestream_snapshot":"Switches between live stream or snapshot interval","load":"Load","localhost":"Localhost","localhttp":"Local HTTP","location":"Location","log":"Log","login":"Login","loglevel":"Log Level","loglevel_info":"Show only defined log level (Info = Show informative messages during processing. This is in addition to warnings and errors - Debug: Show everything, including debugging information - Warning: Show only warnings and errors - Error: Show only errors)","manufacturer_info":"Set the manufacturer name for display in the Home app","map_audio":"Audio Stream","map_audio_info":"Selects the stream used for audio (-map).","map_video":"Video Stream","map_video_info":"Selects the stream used for video (-map).","march":"March","mark_all_as_read":"Mark All as Read","master":"Master","max_delay":"Max Delay","max_delay_info":"When receiving data over UDP, the demuxer tries to reorder received packets (since they may arrive out of order, or packets may get lost totally). This can be disabled by setting the maximum demuxing delay to zero (-max_delay).","max_streams":"Max Streams","max_streams_info":"The maximum number of streams that will be allowed at once to this camera.","may":"May","memory":"Memory","memory_load":"Memory Load","message":"Message","mode":"Mode","model_info":"Set the model for display in the Home app","monday":"Monday","motion":"Motion","motionDoorbellSwitch_info":"Enables dummy switches to trigger motion and/or doorbell, if either of those are enabled. When enabled there will be an additional switch that triggers the motion or doorbell event.","motionDoorbell_info":"Rings the doorbell when motion is activated. This allows for motion alerts to appear on Apple TVs.","motionSensor_info":"Exposes the motion sensor for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","motion_message":"Motion message","motion_reset":"No Motion","motion_timeout":"Motion Timeout","motion_timeout_info":"The number of seconds after triggering to reset the motion sensor. Set to 0 to disable resetting of motion trigger.","movement_detected":"Movement detected","movement_on":"Movement on","mqtt":"MQTT","mqtt_config":"MQTT Configuration","mqtt_publish_topic":"MQTT Publish Topic","name":"Name","never":"Never","new":"New","new_content_available":"New content is available","new_password":"New password","new_password_verify":"Verify new password","new_room":"New Room","new_zone":"New Zone","next":"Next","no_access":"No access permission","no_camera_selected":"No Camera selected","no_cameras":"No cameras","no_data":"No Data","no_data_available":"No data available","no_feed":"No Feed","no_file_selected":"No file selected","no_label":"No Label","no_label_matching":"No label found for","no_more_cameras":"No more cameras","no_more_data":"No more data","no_more_notifications":"No more notifications","no_more_recordings":"No more recordings","no_notifications":"No notifications","no_password_defined":"No password defined","no_permissionlevel_defined":"No permission level defined","no_recordings":"No recordings","no_registered_user":"No registered user","no_results":"No results","no_roomname_defined":"No room name defined","no_title":"No Title","no_username_defined":"No username defined","notfound_message":"Sorry, the page you\'re looking for doesn\'t exist.","notification":"Notification","notification_text":"@ detected a new movement in room %","notifications":"Notifications","notifications_alert":"You have a total of % notifications","notifications_nav_info":"Manage the Alexa, Telegram and Webhook settings","november":"November","now":"Now","npm":"NPM","october":"October","offline":"Offline","ok":"Ok","old_password":"Old Password","online":"Online","options":"Options","orange":"Orange","page_not_found":"The page you requested could not be found.","password":"Password","password_is_required":"Password is required","password_not_match":"Password does not match","password_reenter":"Reenter password","path_is_required":"Path is required","path_to_certificate":"Path to certificate","path_to_key":"Path to key","permission":"Permission","permission_required":"Permission required","permissions":"Permissions","ping_timeout":"Ping Timeout","pink":"Pink","pixel_difference":"Pixel/Color Difference","pixel_difference_info":"The color difference required to trigger motion on a pixel (the smaller the value the smaller the color difference and the larger the value the larger the color difference needed to register it as movement)","plugins":"Plugins","port":"Port","prebuffering":"Prebuffering","prebuffering_info":"Enables camera video prebuffering.","press_enter_to_create":"Press %Enter% to create a new label","prev":"Previous","privacyMode_info":"Turn off the camera feed and replace it with a privacy image in HomeKit","privacySwitch_info":"Exposes a \'privacyMode\' switch to replace the camera feed with a privacy image in HomeKit","probe_size":"Probe Size","probe_size_info":"Set probing size in bytes, i.e. the size of the data to analyze to get stream information. A higher value will enable detecting more information in case it is dispersed into the stream, but will increase latency. Must be an integer not lesser than 32. It is 5000000 by default (-probesize).","process":"Process","profile":"Profile","purple":"Purple","read_rate":"Read Rate","read_rate_info":"Read input at native frame rate (-re).","reconnect":"Reconnect","record_on_movement":"Record on movement through UI","record_on_movement_info":"Enables recording video (eg on movement) through UI and NOT through external controller.","recording":"Recording","recording_text":"The @ was taken on % by a #.","recording_time":"Recording time","recording_timer_not_editable":"Recording time cannot be edited. Settings can be changed in config.json.","recording_type":"Recording type","recording_type_not_editable":"Recording type cannot be edited. Settings can be changed in config.json.","recordings":"Recordings","recordings_alert":"You have % recordings in total and # recordings were selected","recordings_nav_info":"Manage the recording settings and specify the recording type","refresh":"Reresh","registered_user":"Registered User","rekognition":"Rekognition","rekognition_nav_info":"Image analysis for motion detection via Amazon Rekognition","release_notes":"Release Notes","reload":"Reload","remove":"Remove","remove_after":"Remove after","remove_all":"Remove all","remove_all_confirm":"Confirm remove all","remove_all_confirm_text":"After clicking \'Remove all\' all stored @ will be irrevocably deleted. Are you sure?","remove_camera":"Remove Camera","remove_camera_confirm_text":"Do you really want to delete the camera \'@\'?","remove_camera_confirm_text_homebridge":"Do you really want to delete the camera \'@\'? This will also remove the camera from Homebridge!","removed":"removed","reorder_queue_size":"Reorder Queue Size","reorder_queue_size_info":"Packets may be received out of order, so before they can be passed onwards, they need to be reordered. Default jitter buffer size is 500. This option allows you to specify it manually. Higher values will lead to greater latency. Only applicable for reception over UDP (-reorder_queue_size).","reports":"Reports","reset":"Reset","reset_confirm":"Confirm reset","reset_confirm_text":"After clicking \'Reset\' all stored data will be irrevocably deleted. Are you sure?","restart":"Restart","restart_cameraui":"Please restart camera.ui","restart_confirm":"Confirm restart","restart_confirm_text":"Do you really want to reboot @?","restore":"Restore","restore_from_backup_file":"Restore from Backup Archive","room":"Room","room_already_exists":"Room already exists","room_name":"Room Name","rooms":"Rooms","rss":"RSS","rss_feed":"RSS Feed","rss_feed_widget_info":"Please enter a valid RSS URL to see the feed in the widget.","rss_url":"RSS URL","rtsp_transport":"RTSP Transport","rtsp_transport_info":"Set RTSP transport protocols (-rtsp_transport).","saturday":"Saturday","save":"Save","save_as":"Save as","save_path":"Save Pfad","seconds":"Seconds","select":"Select","selected":"selected","selected_camera":"Selected Camera","sensitivity":"Sensivity","sensitivity_info":"The percentage of pixels (see Differnce) required to trigger a movement (a low sensitivity means that more pixel differences have to be detected, a high sensitivity means that less pixel differences have to be detected)","september":"September","serialNr":"Serial number","serialNumber_info":"Set the serial number for display in the Home app","server":"Server","server_information":"Server Information","settings":"Settings","shortcuts":"Shortcuts","shortcuts_widget_info":"Please select the action from the list to show it in the shortcuts.","signin":"Sign in","signout":"Sign out","signout_after":"Sign out after","smtp":"SMTP","smtp_server_config":"SMTP Server Configuration","snapshot":"Snapshot","snapshot_timer":"Snapshot Timer","source":"Video Source","source_info":"FFmpeg options on where to find and how to decode your camera\'s video stream. The most basic form is \'-i\' followed by your camera\'s URL.","source_info_hksv":"Here you can set a custom video source for HKSV recordings only.","space_replace":"Space replace","speaker_end_time":"Speaker end time","speaker_start_time":"Speaker start time","ssl":"SSL","ssl_config":"SSL Configuration","standard":"Standard","start":"Start","start_end_message":"And thats it. <br> Have fun with camera.ui!","start_info_message":"You must change your credentials <br> before logging in to camera.ui","status":"State","still_image_source":"Image Source","still_image_source_info":"If your camera also provides a URL for a still image, that can be defined here with the same syntax as \'source\'. If not set, camera.ui will grab one frame from \'source\'.","stop":"Stop","stream_timeout":"Stream Timeout","sub_source_info":"Low Resolution Substream. FFmpeg options on where to find and how to decode your camera\'s video substream. The most basic form is \'-i\' followed by your camera\'s URL. The substream will be used to probe the stream or for motion detection through video analysis.","successfull":"Successfull","successfully_added_camera":"Camera was added successfully","successfully_changed":"Successfully changed","successfully_created":"Successfully created","successfully_removed":"Successfully removed","sunday":"Sunday","sunny":"Sunny","system":"System","system_nav_info":"Manage the backend settings of camera.ui","system_restart_initiated":"System restart was initiated","system_successfully_restarted":"System was successfully restarted","system_successfully_updated":"System was successfully updated","system_update_initiated":"System update was initiated","telegram":"Telegram","telegram_message_type":"Telegram Message Type","telegram_type_not_editable":"Telegram cannot be changed for this camera.","temperature":"Temperature","text":"Text","theme":"Theme","themes":"Themes","thursday":"Thursday","time":"Time","timeout":"Timeout","timeout_info":"Socket TCP I/O timeout in seconds. If you have problems with hanging FFmpeg processes in the background, you can enter any value here to stop the process automatically after the entered time, if no response comes (-stimeout).","timerange":"Time Range","timestamp":"Timestamp","to":"To","total":"Total","tuesday":"Tuesday","typ":"Typ","unbridge_info":"Bridged cameras can cause slowdowns of the entire Homebridge instance. If unbridged, the camera will need to be added to HomeKit manually.","undo":"Undo","up_to_date":"Up to date","update":"Update","update_available":"Update available","update_or_downgrade":"Update/Downgrade","upload_backup_archive":"Upload Backup Archive","uptime":"Uptime","use_interface_timer":"Interface Recording Timer","use_interface_timer_info":"If enabled, the recording timer from camera.ui will be used for \\"motionTimeout\\".","user":"User","user_list":"User List","username":"Username","username_already_exists":"Username already exist","username_is_required":"Username is required","users":"Users","users_nav_info":"Delete existing users or create new ones","utilization":"Utilization","verification_not_successfull":"Verification not successfull","version":"Version","video":"Video","video_codec":"Video Codec","video_codec_info":"Set the codec used for encoding video sent to HomeKit, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_codec_info_hksv":"Set the codec used for encoding video for HKSV, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_filter":"Video filter","video_filter_info":"Comma-delimited list of additional video filters for FFmpeg to run on the video. If \'none\' is included, the default video filters are disabled (-filter:v).","video_processor_config":"Video Prozessor Configuration","video_processor_path":"Video Processor Path","video_resolution":"Video Resolution","videoanalysis":"Videoanalysis","videoanalysis_info":"Activates Video Analysis for motion detection (a low resolution sub stream is preferred or prebuffering enabled)","warning":"Warning","weather":"Weather","weather_widget_info":"Please search for your city name in English to activate the weather widget.","weather_widget_info_owm":"Weather data is provided by OpenWeather.","webhook":"Webhook","webhook_url":"Webhook URL","wednesday":"Wednesday","welcome_back":"Welcome back","welcome_message":"Welcome to","welcome_submessage":"The web interface for your RTSP capable cameras","widgets":"Widgets","width":"Video Width","width_info":"The width used for video stream.","width_info_hksv":"The maximum width used for HKSV. If not set, will use any size HomeKit requests (-s).","yellow":"Yellow"}}')
    },
    "4e5c": function (e) {
        e.exports = JSON.parse('{"es":{"account":"Cuenta","account_nav_info":"Administrar sus datos, como usuario y contraseña","active":"Activo","add":"Agregar","add_camera":"Agregar Cámara","add_labels":"Agregar Etiqueta","add_new_camera":"Agregar nueva cámara ","add_new_user":"Agregar nuevo usuario","add_to_homescreen":"Agregar a la Pantalla Principal","admin":"Administrador","alarm":"Alarma","alarm_ftp_info":"FTP Server must be enabled to trigger a movement through file upload!","alarm_http_info":"HTTP Server must be enabled to trigger a movement through HTTP call!","alarm_http_reset_info":"HTTP Server must be enabled to reset a movement through HTTP call!","alarm_smtp_info":"SMTP Server must be enabled to trigger a movement through Email!","alexa":"Alexa","all":"Todo","all_notifications_removed":"Todas las notificaciones fueron eliminadas","all_recordings_removed":"Todas las grabaciones fueron eliminadas","amazon_rekognition":"Amazon Rekognition","analyze_duration":"Analyze Duration","analyze_duration_info":"Specify how many microseconds are analyzed to probe the input. A higher value will enable detecting more accurate information, but will increase latency. It defaults to 5,000,000 microseconds = 5 seconds (-analyzeduration).","appearance":"Apariencia","appearance_nav_info":"Cambiar el idioma o la apariencia de la interfaz","apply":"Aplicar","april":"Abril","at_home":"En Casa","at_home_switch":"At Home Switch","atleast_one_permission_required":"Debe seleccionar al menos un permiso","audio":"Audio","audio_codec":"Codec de Audio","audio_codec_info":"Establezca el códec utilizado para codificar el audio enviado a HomeKit para HSV, debe estar basado en AAC (-acodec).","audio_codec_info_hksv":"Set the codec used for encoding audio for HKSV, must be AAC-based (-acodec).","audio_info":"Activar la transmisión de audio de la cámara.","audio_info_hksv":"Enables audio for HKSV recordings.","august":"Agosto","auto":"Auto","auto_darkmode":"Modo Oscuro Automático","automated_backup":"Respaldo Automático","automation":"Automatización","aws":"Amazon Web Services","aws_access_key_id":"Access Key ID","aws_contingent_left":"Contingent Left","aws_contingent_total":"Contingent Total","aws_last_rekognition":"Last Rekognition","aws_region":"Region","aws_secret_access_key":"Secret Access Key","back":"Regresar","backup":"Respaldo","backup_and_restore":"Respaldar & Restaurar","backup_download":"Descargar Respaldo","backup_file":"Archivo de Respaldo","backup_info_download":"Download a backup archive of your entire camera.ui environment. This will backup the entire contents (including recordings) of your camera.ui storage directory. You can restore this later on any platform on which camera.ui is running","backup_info_restore":"Restore a backup archive you previously made using camera.ui. Your camera.ui config, database, recordings and camera.ui user accounts will be restored","backup_info_shedule":"A full backup of the camera.ui database is automatically created every day at 12:00:00 and kept for 7 days","backup_nav_info":"Create and manage the backup copies from the interface","backup_restore":"Restaurar Copia de Seguridad","backup_restored":"Se restauró la Copia de Seguridad","backup_shedule":"Programar Copias de Seguridad","banner_text_doorbell":"Doorbel was triggered","banner_text_motion":"Nuevo movimiento detectado","base":"Base","bitrate":"Bitrate","bitrate_info":"El bitrate utilizado para la transmisión de video.","bitrate_info_hksv":"The maximum bitrate used HKSV, in kbit/s. If not set, will use any bitrate HomeKit requests (-b:v).","blgray":"Azul Gris","blue":"Azul","blue_gray":"Azul Gris","brown":"Café","browse":"Navegar","camera":"Cámara","camera_alarm_info":"Configuración de Detección de Movimiento","camera_already_exists":"La cámara ya se añadió anteriormente","camera_ffmpeg_stream_info":"FFmpeg und Stream Settings","camera_homebridge_info":"Camera Homebridge Settings","camera_interface_info":"Camera Interface Settings","camera_notification_info":"Camera Notification Settings","camera_player_info":"Interface Video Player Parameter","camera_prebuffering_info":"Camera Stream Prebuffering","camera_rekognition_info":"Image analysis on movement detection","camera_settings_save_info":"Fields marked with (¹) can be saved only by clicking the \\"✓\\" button","camera_videoanalysis_info":"camera.ui Motion detection system","cameras":"Cámaras","cameras_nav_info":"Manage the streaming parameters of the cameras","cameras_to_exclude_from_athome":"Cameras to exclude from \'At Home\'","camview":"Camview","cancel":"Cancelar","cannot_change_pw":"Can not change password","cannot_login":"Usuario y/o contraseña incorrecto","change":"Cambiar","change_your_password":"Cambiar su contraseña","charts":"Charts","clear":"Limpiar","close":"Cerrar","color":"Color","confidence":"Confidence","config":"Config","config_information":"config.json","config_was_saved":"Configuración guardada","connected":"Conectado","console":"Consola","cpu_load":"Carga del CPU","cpu_temperature":"Temperatura del CPU","create_zipped_backup_file":"Crear una copia de seguridad comprimida en .zip","custom":"Personalizado","dark":"Oscuro","darkmode":"Modo Oscuro","dashboard":"Panel de Control","database":"Base de Datos","database_information":"Información de la Base de Datos","database_resetted":"Base de Datos reestablecida","day":"Día","days":"Días","debug":"Depuración","debug_info":"Includes debugging output from the main FFmpeg process in the log.","december":"Diciembre","disable_info":"Disables the camera and removes it from HomeKit.","disabled":"Desactivado","disk_load":"Disk Load","disk_space":"Disk Space","domain":"Dominio","doorbell":"Timbre","doorbellSensor_info":"Exposes the doorbell device for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","download":"Descargar","download_backup_archive":"Descargar Archivo de Respaldo","download_failed":"Descarga fallida","drop_files_here":"Arrastra archivos aquí","drop_widgets_here":"Arrastra widgets aquí","dwell_time":"Tiempo de Tolerancia","dwell_time_info":"El Tiempo de Tolerancia es el que pasa después de detectarse un movimiento, se necesita un periodo de N segundos en el que no se detecten movimientos para \\"reactivar\\" el modo de detección por defecto. Esto evita que el sensor envíe múltiples alertas por un mismo movimiento.","email":"Email","email_body_lookup":"Seach email for","email_body_lookup_info":"If camera.ui can\'t find out the name of the camera by the email address, you can enter a term here so that camera.ui can search the text content of the email for this term and thus assign the camera","email_from":"Email from","email_from_info":"The email from address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","email_to":"Email to","email_to_info":"The email to address (without everything after @) to be assigned to this camera (e.g. my test camera. If not defined, the camera name will be used)","empty":"Empty","enabled":"Activado","encoder_options":"Encoder Options","encoder_options_info":"Options to be passed to the video encoder.","encoder_options_info_hksv":"Options to be passed to the video encoder for the HKSV recording process.","endpoints":"Endpoints","enter_new_password":"Por favor, ingrese una nueva contraseña","error":"Error","exclude":"Excluir","excludeSwitch_info":"Exposes a \'exclude\' switch to HomeKit to exclude/include the camera from the interface settings within HomeKit.","existing_rooms":"Habitaciones Existentes","favourite":"Favorito","favourites":"Favoritos","february":"Febrero","ffmpeg_and_stream":"FFmpeg y Stream","field_must_not_be_empty":"El campo no puede estar vacío","fill_all_required_fields":"Por favor rellene todos los campos requeridos","filter":"Filter","filters":"Filtros","finish":"Finish","finish_zone":"Finish Zone","forceClose_timer":"Reset motion after","forceClose_timer_info":"Timer in minutes that automatically interrupts (resets) the constant detection of motion after N minutes. 0 = Disabled. Attention: If the timer is deactivated, it is up to the camera WHEN the motion detection is considered \\"finished\\" and thus the recording is stopped. This can lead to very long recordings!","forgotpw_content":"If you have forgotten your password, you can restore it by deleting the database or importing a backup.","forgotpw_title":"¿Contraseña Olvidada?","fps":"FPS","fps_info":"The fps used for video stream.","fps_info_hksv":"The maximum frame rate used for HKSV. If not set, will use any size HomeKit requests (-r).","free_disk_space":"Free Disk Space","friday":"Viernes","from":"Desde","ftp":"FTP","ftp_absolute_path":"FTP Absolute Path","ftp_server_config":"FTP Server Configuration","fullscreen":"Pantalla Completa","general":"General","general_information":"Información General","general_settings":"Configuración General","go_back":"Regresar","gray":"Gris","green":"Verde","height":"Video Height","height_info":"The height used for video stream.","height_info_hksv":"The maximum height used for HKSV. If not set, will use any size HomeKit requests (-s).","help_started":"To help you get started and provide good experience with camera.ui, please complete the following configuration.","homebridge_restart_info":"Changing the fields marked with (²) requires restart of Homebridge","host":"Host","hour":"Hora","hours":"Horas","http":"HTTP","http_server_config":"Configuración del Servidor HTTP","image":"Imagen","inactive":"Inactivo","interface":"Interfaz","interface_appearance":"Apariencia de la Interfaz","interface_config":"Configuración de la Interfaz","interface_language":"Idioma de la Interfaz","interface_nav_info":"Create new rooms or make other settings","interface_player":"Interface Player","invalid_password":"Contraseña No Válida","invalid_username":"Nombre de Usuario No Válido","january":"Enero","july":"Julio","june":"Junio","label":"Etiqueta","labels":"Etiquetas","language":"Idioma","last_changed":"Última modificación","last_notification":"Última notificación","last_recording":"Última Grabación","last_updated":"Última Vez Actualizado","light":"Light","list_of_existing_user":"Lista de usuarios registrados","live":"Live","livestream":"Livestream","livestream_snapshot":"Switches between live stream or snapshot interval","load":"Load","localhost":"Localhost","localhttp":"Local HTTP","location":"Location","log":"Log","login":"Acceder","loglevel":"Log Level","loglevel_info":"Show only defined log level (Info = Show informative messages during processing. This is in addition to warnings and errors - Debug: Show everything, including debugging information - Warning: Show only warnings and errors - Error: Show only errors)","manufacturer_info":"Ingresa el nombre del fabricante para mostrar en la aplicación Casa","map_audio":"Audio Stream","map_audio_info":"Selects the stream used for audio (-map).","map_video":"Video Stream","map_video_info":"Selects the stream used for video (-map).","march":"Marzo","mark_all_as_read":"Marcar Todo Como Leído","master":"Master","max_delay":"Max Delay","max_delay_info":"When receiving data over UDP, the demuxer tries to reorder received packets (since they may arrive out of order, or packets may get lost totally). This can be disabled by setting the maximum demuxing delay to zero (-max_delay).","max_streams":"Max Streams","max_streams_info":"The maximum number of streams that will be allowed at once to this camera.","may":"Mayo","memory":"Memoria","memory_load":"Memoria Utilizada","message":"Mensaje","mode":"Modo","model_info":"Ingresa el modelo para mostrar en la aplicación Casa","monday":"Lunes","motion":"Movimiento","motionDoorbellSwitch_info":"Enables dummy switches to trigger motion and/or doorbell, if either of those are enabled. When enabled there will be an additional switch that triggers the motion or doorbell event.","motionDoorbell_info":"Rings the doorbell when motion is activated. This allows for motion alerts to appear on Apple TVs.","motionSensor_info":"Exposes the motion sensor for this camera. This can be triggered with the dummy switches, MQTT messages, or via HTTP, depending on what features are enabled in the config.","motion_message":"Motion message","motion_reset":"No Motion","motion_timeout":"Motion Timeout","motion_timeout_info":"The number of seconds after triggering to reset the motion sensor. Set to 0 to disable resetting of motion trigger.","movement_detected":"Movimiento detectado","movement_on":"Movement on","mqtt":"MQTT","mqtt_config":"Configuración de MQTT","mqtt_publish_topic":"MQTT Publish Topic","name":"Nombre","never":"Nunca","new":"Nuevo","new_content_available":"Nuevo contenido disponible","new_password":"Nueva contraseña","new_password_verify":"Verificar nueva contraseña","new_room":"Nueva Habitación","new_zone":"Nueva Zona","next":"Siguiente","no_access":"Sin permiso de acceso","no_camera_selected":"No Camera selected","no_cameras":"No cameras","no_data":"No Data","no_data_available":"No data available","no_feed":"No Feed","no_file_selected":"No file selected","no_label":"Sin Etiqueta","no_label_matching":"No label found for","no_more_cameras":"No more cameras","no_more_data":"No more data","no_more_notifications":"No more notifications","no_more_recordings":"No more recordings","no_notifications":"Sin notificaciones","no_password_defined":"No password defined","no_permissionlevel_defined":"No permission level defined","no_recordings":"Sin grabaciones","no_registered_user":"Usuario no registrado","no_results":"No se encontraron resultados","no_roomname_defined":"No se indicó un hombre de habitación","no_title":"Sin Título","no_username_defined":"No se indicó un nombre de usuario","notfound_message":"Lo siento, la página que estás buscando no existe.","notification":"Notificación","notification_text":"@ detectó un nuevo moviento en la habitación %","notifications":"Notificaciones","notifications_alert":"You have a total of % notifications","notifications_nav_info":"Manage the Alexa, Telegram and Webhook settings","november":"Noviembre","now":"Ahora","npm":"NPM","october":"Octubre","offline":"Offline","ok":"Ok","old_password":"Contraseña Antigua","online":"Online","options":"Opciones","orange":"Naranja","page_not_found":"The page you requested could not be found.","password":"Contraseña","password_is_required":"Password is required","password_not_match":"Password does not match","password_reenter":"Reenter password","path_is_required":"Path is required","path_to_certificate":"Path to certificate","path_to_key":"Path to key","permission":"Permission","permission_required":"Permission required","permissions":"Permissions","ping_timeout":"Ping Timeout","pink":"Rosa","pixel_difference":"Pixel/Color Difference","pixel_difference_info":"The color difference required to trigger motion on a pixel (the smaller the value the smaller the color difference and the larger the value the larger the color difference needed to register it as movement)","plugins":"Plugins","port":"Puerto","prebuffering":"Prebuffering","prebuffering_info":"Enables camera video prebuffering.","press_enter_to_create":"Presiona %Enter% para crear una nueva etiqueta","prev":"Anterior","privacyMode_info":"Turn off the camera feed and replace it with a privacy image in HomeKit","privacySwitch_info":"Exposes a \'privacyMode\' switch to replace the camera feed with a privacy image in HomeKit","probe_size":"Probe Size","probe_size_info":"Set probing size in bytes, i.e. the size of the data to analyze to get stream information. A higher value will enable detecting more information in case it is dispersed into the stream, but will increase latency. Must be an integer not lesser than 32. It is 5000000 by default (-probesize).","process":"Proceso","profile":"Perfil","purple":"Púrpura","read_rate":"Read Rate","read_rate_info":"Read input at native frame rate (-re).","reconnect":"Reconectar","record_on_movement":"Record on movement through UI","record_on_movement_info":"Enables recording video (eg on movement) through UI and NOT through external controller.","recording":"Grabando","recording_text":"The @ was taken on % by a #.","recording_time":"Recording time","recording_timer_not_editable":"Recording time cannot be edited. Settings can be changed in config.json.","recording_type":"Recording type","recording_type_not_editable":"Recording type cannot be edited. Settings can be changed in config.json.","recordings":"Grabaciones","recordings_alert":"You have % recordings in total and # recordings were selected","recordings_nav_info":"Manage the recording settings and specify the recording type","refresh":"Reresh","registered_user":"Registered User","rekognition":"Rekognition","rekognition_nav_info":"Image analysis for motion detection via Amazon Rekognition","release_notes":"Notas de la Versión","reload":"Recargar","remove":"Eliminar","remove_after":"Eliminar después","remove_all":"Eliminar todo","remove_all_confirm":"Confirmar eliminar todo","remove_all_confirm_text":"Después de presionar \'Eliminar todo\' all stored @ will be irrevocably deleted. ¿Estás seguro?","remove_camera":"Eliminar Cámara","remove_camera_confirm_text":"¿Realmente deseas eliminar la cámara \'@\'?","remove_camera_confirm_text_homebridge":"Do you really want to delete the camera \'@\'? This will also remove the camera from Homebridge!","removed":"eliminado","reorder_queue_size":"Reorder Queue Size","reorder_queue_size_info":"Packets may be received out of order, so before they can be passed onwards, they need to be reordered. Default jitter buffer size is 500. This option allows you to specify it manually. Higher values will lead to greater latency. Only applicable for reception over UDP (-reorder_queue_size).","reports":"Reportes","reset":"Reset","reset_confirm":"Confirm reset","reset_confirm_text":"After clicking \'Reset\' all stored data will be irrevocably deleted. Are you sure?","restart":"Reiniciar","restart_cameraui":"Por favor reinicie camera.ui","restart_confirm":"Confirmar reinicio","restart_confirm_text":"¿Realmente deseas reiniciar @?","restore":"Restaurar","restore_from_backup_file":"Restaurar desde un Archivo de Respaldo","room":"Habitación","room_already_exists":"Esta habitación ya existe","room_name":"Nombre de la habitación","rooms":"Habitaciones","rss":"RSS","rss_feed":"RSS Feed","rss_feed_widget_info":"Please enter a valid RSS URL to see the feed in the widget.","rss_url":"URL de RSS","rtsp_transport":"RTSP Transport","rtsp_transport_info":"Set RTSP transport protocols (-rtsp_transport).","saturday":"Sábado","save":"Guardar","save_as":"Guardar como","save_path":"Save Pfad","seconds":"Segundos","select":"Seleccionar","selected":"seleccionado","selected_camera":"Cámara Seleccionada","sensitivity":"Sensibilidad","sensitivity_info":"The percentage of pixels (see Differnce) required to trigger a movement (a low sensitivity means that more pixel differences have to be detected, a high sensitivity means that less pixel differences have to be detected)","september":"Septiembre","serialNr":"Número de serie","serialNumber_info":"Ingresa el número de serie para mostrar en la aplicación Casa","server":"Servidor","server_information":"Información del Servidor","settings":"Configuración","shortcuts":"Shortcuts","shortcuts_widget_info":"Please select the action from the list to show it in the shortcuts.","signin":"Acceder","signout":"Salir","signout_after":"Sign out after","smtp":"SMTP","smtp_server_config":"Configuración del Servidor SMTP","snapshot":"Snapshot","snapshot_timer":"Snapshot Timer","source":"Fuente del Video","source_info":"FFmpeg options on where to find and how to decode your camera\'s video stream. The most basic form is \'-i\' followed by your camera\'s URL.","source_info_hksv":"Here you can set a custom video source for HKSV recordings only.","space_replace":"Space replace","speaker_end_time":"Speaker end time","speaker_start_time":"Speaker start time","ssl":"SSL","ssl_config":"Configuración SSL","standard":"Standard","start":"Iniciar","start_end_message":"Y eso es todo. <br> ¡Disfruta de camera.ui!","start_info_message":"Debes cambiar tus credenciales<br> antes de acceder a camera.ui","status":"Estado","still_image_source":"Fuente de la Imagen","still_image_source_info":"Si su cámara también proporciona una URL para una imagen fija, se puede indicar aquí con la misma sintaxis que \'fuente\'. Si no se indica, camera.ui tomará un fotograma como \'fuente\'.","stop":"Detener","stream_timeout":"Stream Timeout","sub_source_info":"Low Resolution Substream. FFmpeg options on where to find and how to decode your camera\'s video substream. The most basic form is \'-i\' followed by your camera\'s URL. The substream will be used to probe the stream or for motion detection through video analysis.","successfull":"Successfull","successfully_added_camera":"Cámara añadida exitosamente","successfully_changed":"Se modificó exitosamente","successfully_created":"Se creó exitosamente","successfully_removed":"Se eliminó exitosamente","sunday":"Domingo","sunny":"Soleado","system":"Sistema","system_nav_info":"Manage the backend settings of camera.ui","system_restart_initiated":"Se inició con el reinicio del sistema","system_successfully_restarted":"El sistema se reinició exitosamente","system_successfully_updated":"El sistema se actualizó exitosamente","system_update_initiated":"Se inició la actualización del sistema","telegram":"Telegram","telegram_message_type":"Telegram Message Type","telegram_type_not_editable":"Telegram cannot be changed for this camera.","temperature":"Temperatura","text":"Texto","theme":"Tema","themes":"Temas","thursday":"Jueves","time":"Tiempo","timeout":"Timeout","timeout_info":"Socket TCP I/O timeout in seconds. If you have problems with hanging FFmpeg processes in the background, you can enter any value here to stop the process automatically after the entered time, if no response comes (-stimeout).","timerange":"Time Range","timestamp":"Timestamp","to":"Hasta","total":"Total","tuesday":"Martes","typ":"Typ","unbridge_info":"Bridged cameras can cause slowdowns of the entire Homebridge instance. If unbridged, the camera will need to be added to HomeKit manually.","undo":"Deshacer","up_to_date":"Actualizado","update":"Actualizar","update_available":"Actualización disponible","update_or_downgrade":"Update/Downgrade","upload_backup_archive":"Upload Backup Archive","uptime":"Uptime","use_interface_timer":"Interface Recording Timer","use_interface_timer_info":"If enabled, the recording timer from camera.ui will be used for \\"motionTimeout\\".","user":"Usuario","user_list":"Lista de Usuarios","username":"Nombre de usuario","username_already_exists":"Este nombre de usuario ya existe","username_is_required":"Se requiere un nombre de usuario","users":"Usuarios","users_nav_info":"Eliminar usuarios existentes o crear nuevos","utilization":"Utilización","verification_not_successfull":"Verification not successfull","version":"Versión","video":"Video","video_codec":"Codec de Video","video_codec_info":"Set the codec used for encoding video sent to HomeKit, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_codec_info_hksv":"Set the codec used for encoding video for HKSV, must be H.264-based. You can change to a hardware accelerated video codec with this option, if one is available (-vcodec).","video_filter":"Filtro de Video","video_filter_info":"Comma-delimited list of additional video filters for FFmpeg to run on the video. If \'none\' is included, the default video filters are disabled (-filter:v).","video_processor_config":"Video Prozessor Configuration","video_processor_path":"Video Processor Path","video_resolution":"Resulución del Video","videoanalysis":"Videoanalysis","videoanalysis_info":"Activates Video Analysis for motion detection (a low resolution sub stream is preferred or prebuffering enabled)","warning":"Aviso","weather":"Clima","weather_widget_info":"Por favor, busca el nombre de tu ciudad en Inglés para activar el widget del clima.","weather_widget_info_owm":"La información del clima es proporcionada por OpenWeather.","webhook":"Webhook","webhook_url":"URL del Webhook","wednesday":"Miércoles","welcome_back":"Bienvenido de nuevo","welcome_message":"Bienvenido a","welcome_submessage":"La interfaz web para tus cámaras con soporte para RTSP","widgets":"Widgets","width":"Ancho del Video","width_info":"El tamaño de ancho utilizado para la transmisión del video.","width_info_hksv":"The maximum width used for HKSV. If not set, will use any size HomeKit requests (-s).","yellow":"Amarillo"}}')
    },
    "56d7": function (e, t, a) {
        "use strict";
        a.r(t), a.d(t, "app", (function () {
            return Je
        })), a.d(t, "bus", (function () {
            return Ge
        }));
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var i = a("2b0e"),
            r = function () {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("v-app", {
                    staticClass: "app",
                    style: "Camview" === e.$route.name ? "background: #121212 !important" : ""
                }, [i("audio", {
                    attrs: {
                        id: "soundFx"
                    }
                }, [i("source", {
                    attrs: {
                        src: a("a321"),
                        type: "audio/mpeg"
                    }
                })]), i("button", {
                    staticClass: "add-button",
                    staticStyle: {
                        display: "none"
                    }
                }, [e._v(e._s(e.$t("add_to_homescreen")))]), i("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [e.loading ? i("Loader") : i("div", [i("BackToTop"), i("div", {
                    staticClass: "tw-flex"
                }, [e.$route.meta.config && e.$route.meta.config.showSidebar ? i("Sidebar") : e._e(), e.showOverlay ? i("div", {
                    staticClass: "overlay"
                }) : e._e(), i("v-main", {
                    staticClass: "tw-relative",
                    class: "Login" !== e.$route.name && "Start" !== e.$route.name && "404" !== e.$route.name && (e.$route.meta.config && !e.$route.meta.config.showMinifiedNavbar && e.$route.meta.config.showSidebar ? "content " : "") + (e.extendSidebar ? "extended-sidebar" : "")
                }, [e.$route.meta.config && e.$route.meta.config.showNavbar ? i("Navbar") : e._e(), i("div", {
                    staticClass: "router-container tw-relative",
                    class: e.$route.meta.config && e.$route.meta.config.fixedNavbar ? "fixed-navbar" : ""
                }, [i("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [i("router-view")], 1)], 1)], 1)], 1), e.$route.meta.config && e.$route.meta.config.showFooter ? i("Footer") : e._e()], 1)], 1)], 1)
            },
            o = [],
            n = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-fab-transition", [a("v-btn", {
                    directives: [{
                        name: "scroll",
                        rawName: "v-scroll",
                        value: e.onScroll,
                        expression: "onScroll"
                    }, {
                        name: "show",
                        rawName: "v-show",
                        value: e.fab,
                        expression: "fab"
                    }],
                    staticClass: "backtotop-btn",
                    attrs: {
                        transition: "fade-transition",
                        width: "40",
                        height: "40",
                        fab: "",
                        dark: "",
                        fixed: "",
                        bottom: "",
                        right: ""
                    },
                    on: {
                        click: e.toTop
                    }
                }, [a("v-icon", [e._v(" " + e._s(e.icons["mdiChevronUp"]))])], 1)], 1)
            },
            s = [],
            c = a("94ed"),
            d = {
                name: "BackToTop",
                data: function () {
                    return {
                        fab: !1,
                        icons: {
                            mdiChevronUp: c["z"]
                        }
                    }
                },
                methods: {
                    onScroll: function (e) {
                        if ("undefined" !== typeof window) {
                            var t = window.pageYOffset || e.target.scrollTop || 0;
                            this.fab = t > 20
                        }
                    },
                    toTop: function () {
                        this.$vuetify.goTo(0)
                    }
                }
            },
            l = d,
            u = (a("8d15"), a("2877")),
            m = a("6544"),
            f = a.n(m),
            g = a("8336"),
            _ = a("0789"),
            h = a("132d"),
            p = a("269a"),
            v = a.n(p),
            b = a("f977"),
            w = Object(u["a"])(l, n, s, !1, null, "da8c97b0", null),
            y = w.exports;
        f()(w, {
            VBtn: g["a"],
            VFabTransition: _["c"],
            VIcon: h["a"]
        }), v()(w, {
            Scroll: b["b"]
        });
        var k = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-footer", {
                    staticClass: "footer tw-text-xs tw-z-0",
                    attrs: {
                        padless: "",
                        app: "",
                        absolute: ""
                    }
                }, [a("div", {
                    staticClass: "footer-wrapper tw-flex tw-items-center tw-justify-end"
                }, [a("a", {
                    staticClass: "footer-link",
                    attrs: {
                        href: "https://github.com/SeydX",
                        target: "blank"
                    }
                }, [e._v(e._s((new Date).getFullYear()) + " - "), a("strong", [e._v("(c) seydx")])])])])
            },
            S = [],
            x = {
                name: "Footer"
            },
            T = x,
            A = (a("f64a"), a("553a")),
            C = Object(u["a"])(T, k, S, !1, null, "6f88583d", null),
            P = C.exports;
        f()(C, {
            VFooter: A["a"]
        });
        var z = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "tw-relative",
                    staticStyle: {
                        "z-index": "99"
                    }
                }, [e.$route.meta.config.showMinifiedNavbar ? a("div", {
                    staticClass: "top-navi-bar-minified"
                }, [a("v-btn", {
                    staticClass: "text-muted included",
                    attrs: {
                        fab: "",
                        elevation: "1",
                        height: "38px",
                        width: "38px",
                        color: "rgba(0, 0, 0, 0.5)",
                        "retain-focus-on-click": ""
                    },
                    on: {
                        click: e.toggleNavi
                    }
                }, [a("v-icon", [e._v(e._s(e.showSidebar ? e.icons["mdiArrowLeftThick"] : e.icons["mdiArrowRightThick"]))])], 1)], 1) : a("v-app-bar", {
                    staticClass: "top-navi-bar pt-safe",
                    class: (e.$route.meta.config.fixedNavbar ? "top-navi-bar-fixed " : "") + (e.extendSidebar ? "extended-sidebar" : ""),
                    staticStyle: {
                        "border-top": "1px solid rgba(121,121,121,0.1)"
                    },
                    attrs: {
                        height: "64px"
                    }
                }, [a("div", {
                    staticClass: "navi-wrap pl-safe pr-safe"
                }, [a("v-btn", {
                    staticClass: "text-default included",
                    attrs: {
                        icon: "",
                        height: "38px",
                        width: "38px"
                    },
                    on: {
                        click: e.toggleNavi
                    }
                }, [a("v-icon", [e._v(e._s(e.icons["mdiMenu"]))])], 1), e.checkLevel("notifications:access") ? a("div", {
                    staticClass: "tw-flex tw-ml-auto"
                }, [a("v-badge", {
                    attrs: {
                        value: e.notSize,
                        dot: e.notSize < 1,
                        content: e.notSize,
                        color: "var(--cui-primary)",
                        "offset-x": "20",
                        "offset-y": "20",
                        bordered: "",
                        overlap: ""
                    },
                    scopedSlots: e._u([{
                        key: "badge",
                        fn: function () {
                            return [a("div", {
                                staticClass: "badge-text tw-flex tw-justify-center tw-items-center tw-h-full tw-w-full"
                            }, [e.notSize > 99 ? a("span", [e._v("99+")]) : a("span", [e._v(e._s(e.notSize))])])]
                        },
                        proxy: !0
                    }], null, !1, 249734045)
                }, [a("v-btn", {
                    staticClass: "text-default tw-text-white tw-mr-1",
                    attrs: {
                        icon: "",
                        height: "38px",
                        width: "38px"
                    },
                    on: {
                        click: function (t) {
                            return e.$router.push("/notifications")
                        }
                    }
                }, [a("v-icon", [e._v(e._s(e.icons["mdiBell"]))])], 1)], 1)], 1) : e._e()], 1)])], 1)
            },
            L = [],
            N = {
                name: "Navbar",
                data: function () {
                    return {
                        extendSidebar: !1,
                        icons: {
                            mdiArrowLeftThick: c["j"],
                            mdiArrowRightThick: c["k"],
                            mdiBell: c["o"],
                            mdiMenu: c["lb"]
                        },
                        showSidebar: !1,
                        showNotificationsMenu: !1,
                        showProfileMenu: !1
                    }
                },
                computed: {
                    notSize: function () {
                        return this.$store.state.notifications.size
                    }
                },
                created: function () {
                    Ge.$on("extendSidebar", this.triggerSidebar)
                },
                beforeDestroy: function () {
                    Ge.$off("extendSidebar", this.triggerSidebar)
                },
                methods: {
                    triggerSidebar: function (e) {
                        var t = this;
                        this.showSidebar = e, this.$route.meta.config.fixedNavbar ? (this.extendSidebar = e, setTimeout((function () {
                            t.scrollNavi()
                        }), 300)) : this.extendSidebar = !1
                    },
                    toggleNavi: function () {
                        var e = this;
                        Ge.$emit("showSidebar", !0), Ge.$emit("showOverlay", !0), setTimeout((function () {
                            e.scrollNavi()
                        }), 300)
                    },
                    scrollNavi: function () {
                        var e = document.querySelector(".sidebar-nav-item-active"),
                            t = this.$route.meta.config.showMinifiedNavbar ? document.querySelector(".minified-navi") : document.querySelector(".main-navi");
                        e && t && this.$vuetify.goTo(e, {
                            container: t,
                            duration: 250,
                            offset: 50,
                            easing: "easeInOutCubic"
                        })
                    }
                }
            },
            H = N,
            R = (a("92f5"), a("40dc")),
            F = a("4ca6"),
            I = Object(u["a"])(H, z, L, !1, null, "958b1150", null),
            D = I.exports;
        f()(I, {
            VAppBar: R["a"],
            VBadge: F["a"],
            VBtn: g["a"],
            VIcon: h["a"]
        });
        var q = function () {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: {
                            handler: e.hideNavi,
                            include: e.include
                        },
                        expression: "{ handler: hideNavi, include: include }"
                    }],
                    staticClass: "tw-flex tw-flex-col tw-overflow-y-auto tw-pt-4 tw-px-5",
                    class: (e.$route.meta.config.showMinifiedNavbar ? "minified-navi " : "main-navi ") + (e.showSidebar ? "main-navi-show" : "")
                }, [i("div", {
                    staticClass: "tw-flex tw-flex-row tw-justify-between pt-safe pl-safe"
                }, [i("div", {
                    staticClass: "logo tw-cursor-pointer",
                    on: {
                        click: function (t) {
                            return e.$router.push("/dashboard")
                        }
                    }
                }, [i("inline-svg", {
                    attrs: {
                        src: a("db67"),
                        title: "camera.ui",
                        "aria-label": "camera.ui",
                        width: "38px",
                        height: "44px"
                    }
                })], 1), e.showSidebarContent ? i("div", {
                    staticClass: "tw-block tw-ml-auto"
                }, [i("v-menu", {
                    staticClass: "included tw-z-30",
                    attrs: {
                        transition: "slide-y-transition",
                        "min-width": "220px",
                        "close-on-content-click": !1,
                        "offset-y": "",
                        bottom: "",
                        left: "",
                        "nudge-top": "-15",
                        "z-index": "999",
                        "content-class": "light-shadow"
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function (t) {
                            var a = t.on,
                                r = t.attrs;
                            return [i("v-btn", e._g(e._b({
                                staticClass: "tw-text-white",
                                attrs: {
                                    icon: "",
                                    height: "38px",
                                    width: "38px"
                                }
                            }, "v-btn", r, !1), a), [i("v-icon", [e._v(e._s(e.icons["mdiAccount"]))])], 1)]
                        }
                    }], null, !1, 949441594),
                    model: {
                        value: e.showProfileMenu,
                        callback: function (t) {
                            e.showProfileMenu = t
                        },
                        expression: "showProfileMenu"
                    }
                }, [i("v-card", {
                    staticClass: "included light-shadow card-border dropdown-content",
                    attrs: {
                        "min-width": "220px",
                        "max-width": "260px"
                    }
                }, [i("v-list-item", {
                    staticClass: "tw-px-6 tw-py-3 profile-menu-header dropdown-title"
                }, [i("v-list-item-action", {
                    staticClass: "tw-m-0"
                }, [i("v-avatar", {
                    attrs: {
                        size: "40",
                        color: "black"
                    }
                }, [i("v-img", {
                    attrs: {
                        src: e.avatarSrc,
                        alt: e.currentUser.username
                    },
                    on: {
                        error: e.handleErrorImg
                    },
                    scopedSlots: e._u([{
                        key: "placeholder",
                        fn: function () {
                            return [i("div", {
                                staticClass: "tw-flex tw-justify-center tw-items-center tw-h-full"
                            }, [i("v-progress-circular", {
                                attrs: {
                                    indeterminate: "",
                                    color: "var(--cui-primary)",
                                    size: "16"
                                }
                            })], 1)]
                        },
                        proxy: !0
                    }], null, !1, 2965145657)
                })], 1)], 1), i("v-list-item-content", {
                    staticClass: "tw-ml-3"
                }, [i("v-list-item-title", [i("div", {
                    staticClass: "text-left tw-text-sm tw-font-medium"
                }, [e._v(e._s(e.currentUser.username))]), i("div", {
                    staticClass: "text-left tw-text-xs tw-font-light text-muted"
                }, [e._v(e._s(e.currentUser.permissionLevel && e.currentUser.permissionLevel.includes("admin") ? e.$t("master") : e.$t("user")))])])], 1)], 1), i("v-divider"), i("v-card-text", {
                    staticClass: "tw-py-3 tw-px-5 text-center"
                }, [i("v-list", {
                    staticClass: "dropdown-content",
                    attrs: {
                        dense: ""
                    }
                }, [i("v-list-item-group", [i("v-list-item", {
                    on: {
                        click: function () {
                            e.hideNavi(), e.$router.push("/settings/account")
                        }
                    }
                }, [i("v-list-item-icon", {
                    staticClass: "tw-mr-4"
                }, [i("v-icon", {
                    staticClass: "touch-button-icon-light-nohover"
                }, [e._v(e._s(e.icons["mdiAccountOutline"]))])], 1), i("v-list-item-content", {
                    staticClass: "text-left"
                }, [i("v-list-item-title", {
                    staticClass: "tw-text-xs tw-font-medium touch-button-icon-light-nohover"
                }, [e._v(e._s(e.$t("account")))])], 1)], 1), e.checkLevel("admin") ? i("v-divider") : e._e(), e.checkLevel("admin") ? i("v-list-item", {
                    on: {
                        click: function () {
                            e.hideNavi(), e.$router.push("/settings/system")
                        }
                    }
                }, [i("v-list-item-icon", {
                    staticClass: "tw-mr-4"
                }, [i("v-icon", {
                    staticClass: "touch-button-icon-light-nohover"
                }, [e._v(e._s(e.icons["mdiTune"]))])], 1), i("v-list-item-content", {
                    staticClass: "text-left"
                }, [i("v-list-item-title", {
                    staticClass: "tw-text-xs tw-font-medium touch-button-icon-light-nohover"
                }, [e._v(e._s(e.$t("system")))])], 1)], 1) : e._e()], 1)], 1)], 1), i("v-divider"), i("v-card-text", {
                    staticClass: "tw-py-1 tw-px-5 text-center"
                }, [i("v-list", {
                    staticClass: "dropdown-content",
                    attrs: {
                        dense: "",
                        flat: ""
                    }
                }, [i("v-list-item-group", [i("v-list-item", {
                    on: {
                        click: e.signout
                    }
                }, [i("v-list-item-icon", {
                    staticClass: "tw-mr-4"
                }, [i("v-icon", {
                    staticClass: "touch-button-icon-light-nohover"
                }, [e._v(e._s(e.icons["mdiLogoutVariant"]))])], 1), i("v-list-item-content", {
                    staticClass: "text-left"
                }, [i("v-list-item-title", {
                    staticClass: "tw-text-xs tw-font-medium touch-button-icon-light-nohover"
                }, [e._v(e._s(e.$t("signout")))])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : e._e()]), i("transition-group", {
                    staticClass: "tw-h-full tw-w-full pl-safe pb-safe",
                    attrs: {
                        tag: "div",
                        name: "fade",
                        mode: "out-in"
                    }
                }, [e.showSidebarContent ? i("div", {
                    key: "avatar",
                    staticClass: "tw-flex tw-flex-col tw-h-full tw-pt-5"
                }, [i("div", {
                    staticClass: "tw-w-full tw-text-center tw-mb-10"
                }, [i("v-avatar", {
                    staticClass: "tw-mt-5",
                    attrs: {
                        size: "120",
                        color: "#121212"
                    }
                }, [i("v-img", {
                    staticStyle: {
                        border: "1px solid #1a1a1a"
                    },
                    attrs: {
                        src: e.avatarSrc,
                        alt: e.currentUser.username
                    },
                    on: {
                        error: e.handleErrorImg
                    },
                    scopedSlots: e._u([{
                        key: "placeholder",
                        fn: function () {
                            return [i("div", {
                                staticClass: "tw-flex tw-justify-center tw-items-center tw-h-full"
                            }, [i("v-progress-circular", {
                                attrs: {
                                    indeterminate: "",
                                    color: "var(--cui-primary)",
                                    size: "22"
                                }
                            })], 1)]
                        },
                        proxy: !0
                    }], null, !1, 357690366)
                })], 1), i("div", {
                    staticClass: "tw-w-full tw-text-l tw-leading-2 tw-mt-6 tw-text-white tw-font-bold tw-text-xl"
                }, [e._v(e._s(e.currentUser.username))]), i("div", {
                    staticClass: "tw-w-full tw-text-sm tw-leading-1 text-muted"
                }, [e._v(e._s(e.currentUser.permissionLevel && e.currentUser.permissionLevel.includes("admin") ? e.$t("master") : e.$t("user")))])], 1), e._l(e.navigation, (function (t) {
                    return t.main && e.checkLevel(t.requiredLevel) ? i("div", {
                        key: t.name,
                        staticClass: "tw-flex tw-items-center sidebar-nav-items"
                    }, [i("div", {
                        staticClass: "nav-active",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "nav-active-show" : ""
                    }), i("v-btn", {
                        staticClass: "tw-justify-start sidebar-nav-item",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "sidebar-nav-item-active v-btn--active" : "",
                        attrs: {
                            to: t.redirect || t.to,
                            "active-class": "sidebar-nav-item-active",
                            plain: "",
                            block: "",
                            tile: ""
                        },
                        on: {
                            click: e.hideNavi
                        }
                    }, [i("v-icon", {
                        staticClass: "tw-mr-4",
                        attrs: {
                            height: "24px",
                            width: "24px"
                        }
                    }, [e._v(e._s(e.icons[t.icon]))]), i("span", {
                        staticClass: "sidebar-nav-item-text"
                    }, [e._v(e._s(e.$t(t.name.toLowerCase())))])], 1)], 1) : e._e()
                })), i("v-divider", {
                    staticClass: "siderbar-nav-divider tw-my-3"
                }), e._l(e.navigation, (function (t) {
                    return t.extras && e.checkLevel(t.requiredLevel) ? i("div", {
                        key: t.name,
                        staticClass: "tw-flex tw-items-center sidebar-nav-items"
                    }, [i("div", {
                        staticClass: "nav-active",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "nav-active-show" : ""
                    }), i("v-btn", {
                        staticClass: "tw-justify-start sidebar-nav-item",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "sidebar-nav-item-active v-btn--active" : "",
                        attrs: {
                            to: t.redirect || t.to,
                            "active-class": "sidebar-nav-item-active",
                            plain: "",
                            block: "",
                            tile: ""
                        },
                        on: {
                            click: e.hideNavi
                        }
                    }, [i("v-icon", {
                        staticClass: "tw-mr-4",
                        attrs: {
                            height: "24px",
                            width: "24px"
                        }
                    }, [e._v(e._s(e.icons[t.icon]))]), i("span", {
                        staticClass: "sidebar-nav-item-text"
                    }, [e._v(e._s(e.$t(t.name.toLowerCase())))])], 1)], 1) : e._e()
                })), i("div", {
                    staticClass: "tw-my-3"
                }), i("div", {
                    staticClass: "tw-mt-auto"
                }, [i("v-divider", {
                    staticClass: "siderbar-nav-divider tw-mb-3"
                }), e._l(e.navigation, (function (t) {
                    return t.bottom && e.checkLevel(t.requiredLevel) ? i("div", {
                        key: t.name,
                        staticClass: "tw-flex tw-items-center sidebar-nav-items"
                    }, [i("div", {
                        staticClass: "nav-active",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "nav-active-show" : ""
                    }), i("v-btn", {
                        staticClass: "tw-justify-start sidebar-nav-item",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "sidebar-nav-item-active v-btn--active" : "",
                        attrs: {
                            to: t.redirect || t.to,
                            "active-class": "sidebar-nav-item-active",
                            plain: "",
                            block: "",
                            tile: ""
                        },
                        on: {
                            click: e.hideNavi
                        }
                    }, [i("v-icon", {
                        staticClass: "tw-mr-4",
                        attrs: {
                            height: "24px",
                            width: "24px"
                        }
                    }, [e._v(e._s(e.icons[t.icon]))]), i("span", {
                        staticClass: "sidebar-nav-item-text"
                    }, [e._v(e._s(e.$t(t.name.toLowerCase())))])], 1)], 1) : e._e()
                })), i("div", {
                    staticClass: "tw-block tw-text-center tw-my-2 sidebar-nav-footer"
                }, [i("span", {
                    staticClass: "version"
                }, [e._v("v" + e._s(e.version.split("-")[0]))])])], 2)], 2) : e._e(), e.showSidebarMinifiedNav ? i("div", {
                    key: "nav",
                    staticClass: "tw-flex tw-flex-col tw-h-full tw tw-pt-10"
                }, [e._l(e.navigation, (function (t) {
                    return t.main && e.checkLevel(t.requiredLevel) ? i("div", {
                        key: t.name,
                        staticClass: "tw-flex tw-items-center sidebar-nav-items"
                    }, [i("div", {
                        staticClass: "nav-active",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "nav-active-show" : ""
                    }), i("v-btn", {
                        staticClass: "tw-p-0 tw-justify-center sidebar-nav-item-minified",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "sidebar-nav-item-minified-active v-btn--active" : "",
                        attrs: {
                            to: t.redirect || t.to,
                            "active-class": "sidebar-nav-item-minified-active",
                            plain: "",
                            block: "",
                            tile: ""
                        },
                        on: {
                            click: e.hideNavi
                        }
                    }, [i("v-icon", {
                        attrs: {
                            height: "24px",
                            width: "24px"
                        }
                    }, [e._v(e._s(e.icons[t.icon]))])], 1)], 1) : e._e()
                })), i("v-divider", {
                    staticClass: "siderbar-nav-divider tw-my-3"
                }), e._l(e.navigation, (function (t) {
                    return t.extras && e.checkLevel(t.requiredLevel) ? i("div", {
                        key: t.name,
                        staticClass: "tw-flex tw-items-center sidebar-nav-items"
                    }, [i("div", {
                        staticClass: "nav-active",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "nav-active-show" : ""
                    }), i("v-btn", {
                        staticClass: "tw-p-0 tw-justify-center sidebar-nav-item-minified",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "sidebar-nav-item-minified-active v-btn--active" : "",
                        attrs: {
                            to: t.redirect || t.to,
                            "active-class": "sidebar-nav-item-minified-active",
                            plain: "",
                            block: "",
                            tile: ""
                        },
                        on: {
                            click: e.hideNavi
                        }
                    }, [i("v-icon", {
                        attrs: {
                            height: "24px",
                            width: "24px"
                        }
                    }, [e._v(e._s(e.icons[t.icon]))])], 1)], 1) : e._e()
                })), i("div", {
                    staticClass: "tw-my-6"
                }), i("div", {
                    staticClass: "tw-mt-auto"
                }, [i("v-divider", {
                    staticClass: "siderbar-nav-divider tw-mb-3"
                }), e._l(e.navigation, (function (t) {
                    return t.bottom && e.checkLevel(t.requiredLevel) ? i("div", {
                        key: t.name,
                        staticClass: "tw-flex tw-items-center sidebar-nav-items"
                    }, [i("div", {
                        staticClass: "nav-active",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "nav-active-show" : ""
                    }), i("v-btn", {
                        staticClass: "tw-p-0 tw-justify-center sidebar-nav-item-minified",
                        class: e.$route.path === t.to || e.$route.path.split("/")[1] === t.to.replace("/", "") || e.$route.name === t.name && !e.$route.meta.child ? "sidebar-nav-item-minified-active v-btn--active" : "",
                        attrs: {
                            to: t.redirect || t.to,
                            "active-class": "sidebar-nav-item-minified-active",
                            plain: "",
                            block: "",
                            tile: ""
                        },
                        on: {
                            click: e.hideNavi
                        }
                    }, [i("v-icon", {
                        attrs: {
                            height: "24px",
                            width: "24px"
                        }
                    }, [e._v(e._s(e.icons[t.icon]))])], 1)], 1) : e._e()
                })), i("div", {
                    staticClass: "tw-block tw-text-center tw-my-2 sidebar-nav-footer"
                }, [i("span", {
                    staticClass: "version"
                }, [e._v("v" + e._s(e.version.split("-")[0]))])])], 2)], 2) : e._e()])], 1)
            },
            M = [],
            V = a("1da1"),
            E = a("2909"),
            j = a("5530"),
            K = (a("96cf"), a("4de4"), a("d3b7"), a("d81d"), a("b0c0"), a("99af"), a("6d5e")),
            B = a.n(K),
            O = a("40fd"),
            U = a("a18c"),
            $ = {
                name: "Sidebar",
                components: {
                    InlineSvg: B.a
                },
                data: function () {
                    return {
                        avatarSrc: "",
                        mdiAccount: c["a"],
                        mdiAccountOutline: c["c"],
                        mdiLogoutVariant: c["ib"],
                        mdiTune: c["Mb"],
                        icons: {
                            mdiAccount: c["a"],
                            mdiAccountOutline: c["c"],
                            mdiLogoutVariant: c["ib"],
                            mdiTune: c["Mb"],
                            "mdi-bell": c["o"],
                            "mdi-cctv": c["t"],
                            "mdi-chart-arc": c["u"],
                            "mdi-cog": c["G"],
                            "mdi-console": c["I"],
                            "mdi-grid-large": c["X"],
                            "mdi-image-multiple": c["ab"],
                            "mdi-puzzle": c["zb"],
                            "mdi-script": c["Db"],
                            "mdi-text-box-outline": c["Hb"],
                            "mdi-view-dashboard": c["Rb"]
                        },
                        navigation: U["b"].map((function (e) {
                            if (e.meta.navigation) return Object(j["a"])(Object(j["a"])({
                                name: e.name,
                                to: e.path,
                                redirect: e.meta.redirectTo
                            }, e.meta.navigation), e.meta.auth)
                        })).filter((function (e) {
                            return e
                        })),
                        showProfileMenu: !1,
                        showSidebar: !1,
                        showSidebarContent: !1,
                        showSidebarMinifiedNav: !0,
                        version: O["a"]
                    }
                },
                computed: {
                    currentUser: function () {
                        return this.$store.state.auth.user || {}
                    },
                    uiConfig: function () {
                        return this.$store.state.config.ui
                    }
                },
                watch: {
                    currentUser: {
                        handler: function (e) {
                            null !== e && void 0 !== e && e.photo && (this.avatarSrc = "/files/".concat(e.photo, "?rnd=").concat(new Date))
                        },
                        deep: !0
                    },
                    "$route.path": {
                        handler: function () {
                            this.showSidebar && this.hideNavi()
                        }
                    }
                },
                created: function () {
                    var e;
                    Ge.$on("extendSidebarQuery", this.triggerSidebarQuery), Ge.$on("showSidebar", this.toggleNavi), this.currentUser.photo && "no_img.png" !== this.currentUser.photo ? this.avatarSrc = "/files/".concat(this.currentUser.photo) : this.avatarSrc = a("02a3"), this.version = (null === (e = this.uiConfig) || void 0 === e ? void 0 : e.version) || O["a"]
                },
                mounted: function () {
                    this.scrollNavi()
                },
                beforeDestroy: function () {
                    Ge.$off("extendSidebarQuery", this.triggerSidebarQuery), Ge.$off("showSidebar", this.toggleNavi)
                },
                methods: {
                    triggerSidebarQuery: function () {
                        Ge.$emit("extendSidebar", this.showSidebar)
                    },
                    include: function () {
                        return Object(E["a"])(document.querySelectorAll(".included"))
                    },
                    handleErrorImg: function () {
                        this.avatarSrc = a("02a3")
                    },
                    hideNavi: function () {
                        this.showSidebar = this.showSidebarContent = this.showProfileMenu = !1, this.showSidebarMinifiedNav = !0, Ge.$emit("showOverlay", !1), Ge.$emit("extendSidebar", !1)
                    },
                    scrollNavi: function () {
                        var e = document.querySelector(".sidebar-nav-item-minified-active"),
                            t = document.querySelector(".main-navi");
                        e && t && this.$vuetify.goTo(e, {
                            container: t,
                            duration: 250,
                            offset: 50,
                            easing: "easeInOutCubic"
                        })
                    },
                    signout: function () {
                        var e = this;
                        return Object(V["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.hideNavi(), t.next = 3, e.$store.dispatch("auth/logout");
                                    case 3:
                                        setTimeout((function () {
                                            return e.$router.push("/")
                                        }), 200);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    toggleNavi: function (e) {
                        var t = this;
                        e = this.showSidebar ? !e : e, this.showSidebar = e, Ge.$emit("extendSidebar", e), e ? (this.showSidebarMinifiedNav = !e, setTimeout((function () {
                            t.showSidebarContent = e
                        }), 200)) : (this.showProfileMenu = e, this.showSidebarContent = e, this.showSidebarMinifiedNav = !e)
                    }
                }
            },
            W = $,
            G = (a("9d75"), a("8212")),
            J = a("b0af"),
            Q = a("99d9"),
            Z = a("ce7e"),
            Y = a("adda"),
            X = a("8860"),
            ee = a("da13"),
            te = a("1800"),
            ae = a("5d23"),
            ie = a("1baa"),
            re = a("34c3"),
            oe = a("e449"),
            ne = a("490a"),
            se = a("a293"),
            ce = Object(u["a"])(W, q, M, !1, null, "6e43768c", null),
            de = ce.exports;
        f()(ce, {
            VAvatar: G["a"],
            VBtn: g["a"],
            VCard: J["a"],
            VCardText: Q["c"],
            VDivider: Z["a"],
            VIcon: h["a"],
            VImg: Y["a"],
            VList: X["a"],
            VListItem: ee["a"],
            VListItemAction: te["a"],
            VListItemContent: ae["a"],
            VListItemGroup: ie["a"],
            VListItemIcon: re["a"],
            VListItemTitle: ae["c"],
            VMenu: oe["a"],
            VProgressCircular: ne["a"]
        }), v()(ce, {
            ClickOutside: se["a"]
        });
        var le = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "tw-flex tw-align-center tw-justify-center tw-z-10"
                }, [a("span", [e._v(e._s(e.updateInformTxt))]), a("button", {
                    staticClass: "action refresh-button",
                    on: {
                        click: function (t) {
                            return e.$emit("updateClicked")
                        }
                    }
                }, [e._v(e._s(e.updateNowTxt))])])
            },
            ue = [],
            me = {
                name: "UpdateBanner",
                props: {
                    updateInformTxt: {
                        type: String,
                        default: "New update available"
                    },
                    updateNowTxt: {
                        type: String,
                        default: "Refresh"
                    }
                }
            },
            fe = me,
            ge = (a("3a0f"), Object(u["a"])(fe, le, ue, !1, null, "7f881bb2", null)),
            _e = ge.exports,
            he = {
                data: function () {
                    return {
                        refreshing: !1,
                        registration: null,
                        updateExists: !1
                    }
                },
                created: function () {
                    var e = this;
                    "serviceWorker" in navigator && (document.addEventListener("swUpdated", this.updateAvailable, {
                        once: !0
                    }), navigator.serviceWorker.addEventListener("controllerchange", (function () {
                        e.refreshing || (e.refreshing = !0, window.location.reload())
                    }))), this.$store.dispatch("config/loadConfig")
                },
                methods: {
                    updateAvailable: function (e) {
                        var t = this;
                        this.registration = e.detail, this.updateExists = !0, this.idInfo = "swUpdate";
                        var a = {
                            component: _e,
                            props: {
                                updateInformTxt: this.$t("new_content_available"),
                                updateNowTxt: this.$t("refresh")
                            },
                            listeners: {
                                updateClicked: function () {
                                    return t.refreshApp()
                                }
                            }
                        };
                        this.$toast(a, {
                            id: this.idInfo
                        })
                    },
                    refreshApp: function () {
                        this.updateExists = !1, this.$toast.dismiss(this.idInfo), this.registration && this.registration.waiting && this.registration.waiting.postMessage({
                            type: "SKIP_WAITING"
                        })
                    }
                }
            },
            pe = {
                name: "App",
                components: {
                    BackToTop: y,
                    Footer: P,
                    Navbar: D,
                    Sidebar: de
                },
                mixins: [he],
                data: function () {
                    return {
                        extendSidebar: !1,
                        loading: !0,
                        showOverlay: !1
                    }
                },
                watch: {
                    "$route.path": {
                        handler: function () {
                            this.showOverlay = !1
                        }
                    }
                },
                mounted: function () {
                    var e = this;
                    Ge.$on("showOverlay", this.triggerOverlay), Ge.$on("extendSidebar", this.triggerSidebar), setTimeout((function () {
                        e.loading = !1
                    }), 2250)
                },
                beforeDestroy: function () {
                    Ge.$off("showOverlay", this.triggerOverlay), Ge.$off("extendSidebar", this.triggerSidebar)
                },
                updated: function () {
                    Ge.$emit("extendSidebarQuery")
                },
                methods: {
                    triggerSidebar: function (e) {
                        this.extendSidebar = e
                    },
                    triggerOverlay: function (e) {
                        this.showOverlay = e
                    }
                }
            },
            ve = pe,
            be = (a("034f"), a("e4b1"), a("7496")),
            we = a("f6c4"),
            ye = Object(u["a"])(ve, r, o, !1, null, "03159aef", null),
            ke = ye.exports;
        f()(ye, {
            VApp: be["a"],
            VMain: we["a"]
        });
        var Se = a("4360"),
            xe = a("402c"),
            Te = (a("38cf"), a("ac1f"), a("5319"), a("81b2"), a("0eb6"), a("b7ef"), a("8bd4"), a("5cc6"), a("907a"), a("9a8c"), a("a975"), a("735e"), a("c1ac"), a("d139"), a("3a7b"), a("d5d6"), a("82f8"), a("e91f"), a("60bd"), a("5f96"), a("3280"), a("3fcc"), a("ca91"), a("25a1"), a("cd26"), a("3c5d"), a("2954"), a("649e"), a("219c"), a("170b"), a("b39a"), a("72f7"), a("e9c4"), a("9483")),
            Ae = a("365c"),
            Ce = "/subscribe",
            Pe = function () {
                var e = Object(V["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ae["a"].get(Ce);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(),
            ze = function () {
                var e = Object(V["a"])(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ae["a"].post(Ce, t);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();

        function Le(e) {
            for (var t = "=".repeat((4 - e.length % 4) % 4), a = (e + t).replace(/-/g, "+").replace(/_/g, "/"), i = window.atob(a), r = new Uint8Array(i.length), o = 0; o < i.length; ++o) r[o] = i.charCodeAt(o);
            return r
        }
        Object(Te["a"])("".concat("/", "service-worker.js"), {
            registrationOptions: {
                scope: "./"
            },
            ready: function (e) {
                return Object(V["a"])(regeneratorRuntime.mark((function t() {
                    var a, i, r, o, n, s, c, d;
                    return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"), i = document.querySelector(".add-button"), i && window.addEventListener("beforeinstallprompt", (function (e) {
                                        e.preventDefault(), a = e, i.style.display = "block", i.addEventListener("click", (function () {
                                            i.style.display = "none", a.prompt(), a.userChoice.then((function (e) {
                                                "accepted" === e.outcome ? console.log("User accepted the A2HS prompt") : console.log("User dismissed the A2HS prompt"), a = null
                                            }))
                                        }))
                                    })), !("PushManager" in window) || "denied" === Notification.permission) {
                                    t.next = 30;
                                    break
                                }
                                return t.next = 6, e.pushManager.getSubscription();
                            case 6:
                                if (r = t.sent, o = !(null === r), n = !1, s = JSON.parse(JSON.stringify(Se["a"].getters["auth/user"])), !(s && s.access_token && s.permissionLevel.some((function (e) {
                                        return "recordings:access" === e || "admin" === e
                                    })))) {
                                    t.next = 29;
                                    break
                                }
                                return t.next = 13, Pe();
                            case 13:
                                if (c = t.sent, o && !c.data.subscription ? (r.unsubscribe(), n = !0) : o || (n = !0), !n) {
                                    t.next = 27;
                                    break
                                }
                                return t.prev = 16, t.next = 19, e.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                    applicationServerKey: Le(c.data.publicKey)
                                });
                            case 19:
                                return d = t.sent, t.next = 22, ze(d);
                            case 22:
                                t.next = 27;
                                break;
                            case 24:
                                t.prev = 24, t.t0 = t["catch"](16), console.log("Can not subscribe user!", t.t0);
                            case 27:
                                t.next = 30;
                                break;
                            case 29:
                                o && r.unsubscribe();
                            case 30:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [16, 24]
                    ])
                })))()
            },
            registered: function () {
                console.log("Service worker has been registered.")
            },
            cached: function () {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function () {
                console.log("New content is downloading.")
            },
            updated: function (e) {
                console.log("New content is available;"), document.dispatchEvent(new CustomEvent("swUpdated", {
                    detail: e
                }))
            },
            offline: function () {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function (e) {
                console.error("Error during service worker registration:", e)
            }
        });
        a("def6"), a("346c"), a("5aea"), a("da96"), a("abb2"), a("caad"), a("2532");
        var Ne, He = {
                methods: {
                    checkLevel: function (e) {
                        if (!e) return !1;
                        Array.isArray(e) || (e = [e]);
                        var t = Se["a"].getters["auth/user"];
                        return !!t && (t && e.every((function (e) {
                            return t.permissionLevel.includes(e) || t.permissionLevel.includes("admin")
                        })))
                    }
                }
            },
            Re = a("12cb"),
            Fe = function () {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "loader tw-flex tw-justify-center tw-align-center"
                }, [i("inline-svg", {
                    attrs: {
                        src: a("6241"),
                        title: "camera.ui",
                        "aria-label": "camera.ui",
                        width: "200px"
                    }
                })], 1)
            },
            Ie = [],
            De = {
                name: "Loader",
                components: {
                    InlineSvg: B.a
                },
                props: {
                    reload: Boolean
                },
                data: function () {
                    return {
                        loaderTimeout: null
                    }
                },
                mounted: function () {
                    this.reload && (this.loaderTimeout = setInterval((function () {
                        var e = document.getElementById("lens");
                        null === e || void 0 === e || e.classList.remove("cameraLens");
                        var t = document.getElementById("CameraUI_U");
                        null === t || void 0 === t || t.classList.remove("cameraLetter"), setTimeout((function () {
                            null === e || void 0 === e || e.classList.add("cameraLens"), null === t || void 0 === t || t.classList.add("cameraLetter")
                        }), 100)
                    }), 2300))
                },
                beforeDestroy: function () {
                    this.loaderTimeout && (clearInterval(this.loaderTimeout), this.loaderTimeout = null)
                }
            },
            qe = De,
            Me = (a("eaf8"), Object(u["a"])(qe, Fe, Ie, !1, null, "82a0c48a", null)),
            Ve = Me.exports,
            Ee = a("6c42"),
            je = a("ade3"),
            Ke = {
                position: "bottom-right",
                timeout: 3e3,
                closeOnClick: !0,
                pauseOnFocusLoss: !0,
                pauseOnHover: !0,
                draggable: !0,
                draggablePercent: .6,
                showCloseButtonOnHover: !1,
                hideProgressBar: !1,
                closeButton: "button",
                icon: !0,
                rtl: !1
            },
            Be = {
                position: "top-center",
                timeout: 5e3,
                pauseOnFocusLoss: !0,
                pauseOnHover: !0,
                draggable: !0,
                draggablePercent: .6,
                showCloseButtonOnHover: !1,
                hideProgressBar: !0,
                closeButton: !1,
                icon: !1,
                rtl: !1,
                closeOnClick: !1
            },
            Oe = {
                position: "bottom-center",
                timeout: !1,
                closeOnClick: !1,
                pauseOnFocusLoss: !1,
                pauseOnHover: !1,
                draggable: !1,
                draggablePercent: .6,
                showCloseButtonOnHover: !1,
                hideProgressBar: !0,
                closeButton: !1,
                icon: !1,
                rtl: !1
            },
            Ue = {
                transition: "Vue-Toastification__bounce",
                maxToasts: 1,
                newestOnTop: !0,
                toastDefaults: (Ne = {}, Object(je["a"])(Ne, Ee["a"].DEFAULT, Oe), Object(je["a"])(Ne, Ee["a"].ERROR, Ke), Object(je["a"])(Ne, Ee["a"].INFO, Be), Object(je["a"])(Ne, Ee["a"].SUCCESS, Ke), Object(je["a"])(Ne, Ee["a"].WARNING, Ke), Ne)
            },
            $e = a("c9d6"),
            We = a("f87c");
        i["a"].use(Ee["b"], Ue), i["a"].use(We["a"], $e["a"], {
            store: Se["a"]
        }), i["a"].component("Loader", Ve), i["a"].mixin(He), i["a"].config.productionTip = !1;
        var Ge = new i["a"],
            Je = new i["a"]({
                router: U["a"],
                store: Se["a"],
                vuetify: xe["a"],
                i18n: Re["a"],
                render: function (e) {
                    return e(ke)
                }
            }).$mount("#app")
    },
    "5aea": function (e, t, a) {},
    "5cf0": function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return c
        })), a.d(t, "b", (function () {
            return d
        })), a.d(t, "c", (function () {
            return l
        })), a.d(t, "d", (function () {
            return u
        }));
        var i = a("1da1"),
            r = (a("96cf"), a("365c")),
            o = "/config",
            n = "download",
            s = "stat",
            c = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a) {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].patch("".concat(o).concat(a || ""), t);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(),
            d = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].get("".concat(o, "/").concat(n));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(),
            l = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].get("".concat(o).concat(t || ""));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(),
            u = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].get("".concat(o, "/").concat(s));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }()
    },
    6241: function (e, t, a) {
        e.exports = a.p + "img/logo_loading_circle.7a077cad.svg"
    },
    7808: function (e, t, a) {},
    "85ec": function (e, t, a) {},
    "8d15": function (e, t, a) {
        "use strict";
        a("9d78")
    },
    "92f5": function (e, t, a) {
        "use strict";
        a("d8e5")
    },
    "9d75": function (e, t, a) {
        "use strict";
        a("ec74")
    },
    "9d78": function (e, t, a) {},
    a18c: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return l
        }));
        var i = a("1da1"),
            r = (a("96cf"), a("d3b7"), a("3ca3"), a("ddb0"), a("b0c0"), a("caad"), a("2532"), a("99af"), a("2b0e")),
            o = a("8c4f"),
            n = a("56d7"),
            s = a("4360"),
            c = a("adf6"),
            d = o["a"].prototype.push;
        o["a"].prototype.push = function (e) {
            return d.call(this, e).catch((function (e) {
                return e
            }))
        }, r["a"].use(o["a"]);
        var l = [{
                path: "*",
                name: "404",
                meta: {
                    auth: {
                        requiresAuth: !1,
                        requiredLevel: []
                    },
                    config: {
                        showFooter: !1,
                        showNavbar: !1,
                        showSidebar: !1
                    }
                },
                component: function () {
                    return a.e("404").then(a.bind(null, "efd7"))
                }
            }, {
                path: "/",
                name: "Login",
                meta: {
                    auth: {
                        requiresAuth: !1,
                        requiredLevel: []
                    },
                    config: {
                        showFooter: !1,
                        showNavbar: !1,
                        showSidebar: !1
                    }
                },
                component: function () {
                    return Promise.all([a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("login")]).then(a.bind(null, "7101"))
                }
            }, {
                path: "/start",
                name: "Start",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["admin"]
                    },
                    config: {
                        showFooter: !1,
                        showNavbar: !1,
                        showSidebar: !1
                    }
                },
                component: function () {
                    return Promise.all([a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("start")]).then(a.bind(null, "dfd9"))
                }
            }, {
                path: "/dashboard",
                name: "Dashboard",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["dashboard:access"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        main: !0,
                        icon: "mdi-view-dashboard"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("camera~cameraFeed~cameras~camview~dashboard"), a.e("dashboard")]).then(a.bind(null, "e124"))
                }
            }, {
                path: "/cameras",
                name: "Cameras",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["cameras:access"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        main: !0,
                        icon: "mdi-cctv"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("camera~cameraFeed~cameras~camview~dashboard"), a.e("cameras")]).then(a.bind(null, "cfed"))
                }
            }, {
                path: "/cameras/:name",
                name: "Camera",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["cameras:access"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("camera~cameraFeed~cameras~camview~dashboard"), a.e("camera")]).then(a.bind(null, "a55c"))
                }
            }, {
                path: "/cameras/:name/feed",
                name: "CameraFeed",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["cameras:access"]
                    },
                    config: {
                        fixedNavbar: !1,
                        showFooter: !1,
                        showNavbar: !1,
                        showSidebar: !1
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("camera~cameraFeed~cameras~camview~dashboard"), a.e("cameraFeed")]).then(a.bind(null, "d7ed"))
                }
            }, {
                path: "/recordings",
                name: "Recordings",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["recordings:access"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        main: !0,
                        icon: "mdi-image-multiple"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("recordings")]).then(a.bind(null, "fa39"))
                }
            }, {
                path: "/notifications",
                name: "Notifications",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["notifications:access"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        main: !0,
                        icon: "mdi-bell"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("notifications")]).then(a.bind(null, "b94d"))
                }
            }, {
                path: "/camview",
                name: "Camview",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["camview:access"]
                    },
                    config: {
                        showFooter: !1,
                        showMinifiedNavbar: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        main: !0,
                        icon: "mdi-grid-large"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("camera~cameraFeed~cameras~camview~dashboard"), a.e("camview")]).then(a.bind(null, "6ae6"))
                }
            }, {
                path: "/console",
                name: "Console",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["admin"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        extras: !0,
                        icon: "mdi-console"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("console")]).then(a.bind(null, "bb23"))
                }
            }, {
                path: "/config",
                name: "Config",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["admin"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        extras: !0,
                        icon: "mdi-text-box-outline"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("config")]).then(a.bind(null, "cb03"))
                }
            }, {
                path: "/utilization",
                name: "Utilization",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["admin"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        extras: !0,
                        icon: "mdi-chart-arc"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("utilization")]).then(a.bind(null, "24ba"))
                }
            }, {
                path: "/plugins",
                name: "Plugins",
                meta: {
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: ["admin"]
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        extras: !0,
                        icon: "mdi-puzzle"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("plugins")]).then(a.bind(null, "80f9"))
                }
            }, {
                path: "/settings",
                name: "Settings",
                meta: {
                    redirectTo: "/settings/account",
                    auth: {
                        requiresAuth: !0,
                        requiredLevel: []
                    },
                    config: {
                        fixedNavbar: !0,
                        showFooter: !0,
                        showNavbar: !0,
                        showSidebar: !0
                    },
                    navigation: {
                        bottom: !0,
                        icon: "mdi-cog"
                    }
                },
                component: function () {
                    return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "3f42"))
                },
                children: [{
                    path: "account",
                    meta: {
                        name: "Account",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: []
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-account-circle-outline"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "cde8"))
                    }
                }, {
                    path: "appearance",
                    meta: {
                        name: "Appearance",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: []
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-pencil-ruler"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "40d5f"))
                    }
                }, {
                    path: "interface",
                    meta: {
                        name: "Interface",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["settings:general:access", "settings:general:edit"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-application-cog"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "7012"))
                    }
                }, {
                    path: "user",
                    meta: {
                        name: "Users",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["admin"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-account-plus"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "3464"))
                    }
                }, {
                    path: "cameras",
                    meta: {
                        name: "Cameras",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["settings:cameras:access", "settings:cameras:edit"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-cctv"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "b8da"))
                    }
                }, {
                    path: "recordings",
                    meta: {
                        name: "Recordings",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["settings:recordings:access", "settings:recordings:edit"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-image-multiple-outline"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "ee81"))
                    }
                }, {
                    path: "notifications",
                    meta: {
                        name: "Notifications",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["settings:notifications:access", "settings:notifications:edit"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-bell-outline"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "a580"))
                    }
                }, {
                    path: "rekognition",
                    meta: {
                        name: "Rekognition",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["admin"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-face-recognition"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "e259"))
                    }
                }, {
                    path: "backup",
                    meta: {
                        name: "Backup",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["backup:download", "backup:restore"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-backup-restore"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "51d6"))
                    }
                }, {
                    path: "system",
                    meta: {
                        name: "System",
                        child: !0,
                        auth: {
                            requiresAuth: !0,
                            requiredLevel: ["admin"]
                        },
                        config: {
                            fixedNavbar: !0,
                            showFooter: !0,
                            showNavbar: !0,
                            showSidebar: !0
                        },
                        navigation: {
                            icon: "mdi-tune"
                        }
                    },
                    component: function () {
                        return Promise.all([a.e("camera~cameraFeed~cameras~camview~config~console~dashboard~notifications~plugins~recordings~settings~7e019b2d"), a.e("cameras~console~dashboard~login~notifications~plugins~recordings~settings~start"), a.e("cameras~console~dashboard~notifications~recordings~settings"), a.e("notifications~recordings~settings"), a.e("settings")]).then(a.bind(null, "c712"))
                    }
                }]
            }],
            u = new o["a"]({
                mode: "history",
                base: "/",
                routes: l,
                scrollBehavior: function () {
                    return new Promise((function (e) {
                        setTimeout((function () {
                            e({
                                x: 0,
                                y: 0,
                                behavior: "smooth"
                            })
                        }), 250)
                    }))
                }
            });
        u.beforeEach(function () {
            var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, a, i) {
                var r, o, d, l, u;
                return regeneratorRuntime.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (r = s["a"].getters["auth/user"], o = (t.name || t.meta.name).toLowerCase(), !r || !r.access_token) {
                                e.next = 24;
                                break
                            }
                            return e.prev = 3, e.next = 6, Object(c["a"])();
                        case 6:
                            if (!(t.meta.auth.requiredLevel.length > 0)) {
                                e.next = 11;
                                break
                            }
                            if (d = r.permissionLevel.some((function (e) {
                                    return t.meta.auth.requiredLevel.includes(e) || "admin" === e
                                })), d) {
                                e.next = 11;
                                break
                            }
                            return n["app"].$toast.error("".concat(n["app"].$t(o), ": ").concat(n["app"].$t("permission_required"))), e.abrupt("return", i("/settings/account"));
                        case 11:
                            l = localStorage.getItem("lastPage"), u = Boolean("login" === o && l), u ? i({
                                path: l
                            }) : i(), e.next = 22;
                            break;
                        case 16:
                            return e.prev = 16, e.t0 = e["catch"](3), console.log(e.t0), e.next = 21, s["a"].dispatch("auth/logout");
                        case 21:
                            setTimeout((function () {
                                return i("/")
                            }), 200);
                        case 22:
                            e.next = 25;
                            break;
                        case 24:
                            "login" !== o ? i("/") : i();
                        case 25:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 16]
                ])
            })));
            return function (t, a, i) {
                return e.apply(this, arguments)
            }
        }()), u.afterEach((function (e) {
            var t = (e.name || e.meta.name).toLowerCase();
            "login" !== t && localStorage.setItem("lastPage", e.path)
        })), t["a"] = u
    },
    a2af: function (e, t, a) {},
    a321: function (e, t, a) {
        e.exports = a.p + "media/notification.91f71662.mp3"
    },
    a537: function (e, t, a) {
        var i = {
            "./de.json": "15a2",
            "./en.json": "4c86",
            "./es.json": "4e5c",
            "./fr.json": "33f8",
            "./nl.json": "4c1e",
            "./fa.json": "c2c9"
        };

        function r(e) {
            var t = o(e);
            return a(t)
        }

        function o(e) {
            if (!a.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return i[e]
        }
        r.keys = function () {
            return Object.keys(i)
        }, r.resolve = o, e.exports = r, r.id = "a537"
    },
    adf6: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return d
        })), a.d(t, "b", (function () {
            return l
        })), a.d(t, "c", (function () {
            return u
        }));
        var i = a("1da1"),
            r = (a("96cf"), a("365c")),
            o = "/auth",
            n = "login",
            s = "logout",
            c = "check",
            d = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].get("".concat(o, "/").concat(c));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(),
            l = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].post("".concat(o, "/").concat(n), t);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(),
            u = function () {
                var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r["a"].post("".concat(o, "/").concat(s));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }()
    },
    b078: function (e, t, a) {},
    c2c9: function (e) {
        e.exports = JSON.parse('{"fa":{"account":"حساب کاربری","account_nav_info":"مدیریت اطلاعات حساب مانند نام کاربری و رمز عبور","active":"فعال","add":"اضافه کردن","add_camera":"اضافه کردن دوربین","add_labels":"اضافه کردن برچسب","add_new_camera":"اضافه کردن دوربین جدید","add_new_user":"اضافه کردن کاربر جدید","add_to_homescreen":"افزودن به صفحه اصلی","admin":"مدیر سیستم","alarm":"آلارم","alarm_ftp_info":"برای فعال‌سازی آلارم، باید سرور FTP برای آپلود فایل فعال شود!","alarm_http_info":"برای فعال‌سازی آلارم، باید سرور HTTP برای ارسال درخواست فعال شود!","alarm_http_reset_info":"برای بازنشانی آلارم، باید سرور HTTP فعال شود!","alarm_smtp_info":"برای فعال‌سازی آلارم از طریق ایمیل، باید سرور SMTP فعال باشد!","alexa":"الکسا","all":"همه","all_notifications_removed":"همه اعلان‌ها حذف شدند","all_recordings_removed":"همه ضبط‌ها حذف شدند","amazon_rekognition":"تشخیص آمازون","analyze_duration":"مدت زمان تحلیل","analyze_duration_info":"مدت زمان تحلیل را مشخص کنید. مدت زمان بالاتر باعث دقت بیشتر اطلاعات می‌شود اما تاخیر را افزایش می‌دهد. مقدار پیش‌فرض 5,000,000 میکروثانیه (5 ثانیه) است.","appearance":"ظاهر","appearance_nav_info":"زبان یا ظاهر رابط کاربری را تغییر دهید","apply":"اعمال","april":"آوریل","at_home":"در خانه","at_home_switch":"کلید 'در خانه'","atleast_one_permission_required":"حداقل یک دسترسی باید انتخاب شود","audio":"صدا","audio_codec":"کدک صدا","audio_codec_info":"کدک استفاده شده برای کدگذاری صدا برای HSV باید مبتنی بر AAC باشد.","audio_codec_info_hksv":"کدک استفاده شده برای کدگذاری صدا برای HKSV باید مبتنی بر AAC باشد.","audio_info":"پخش صدای دوربین را فعال کنید.","audio_info_hksv":"پخش صدای HKSV را فعال کنید.","august":"اوت","auto":"خودکار","auto_darkmode":"حالت تاریک خودکار","automated_backup":"پشتیبان‌گیری خودکار","automation":"اتوماسیون","aws":"خدمات وب آمازون","aws_access_key_id":"شناسه کلید دسترسی","aws_contingent_left":"باقیمانده تخصیص","aws_contingent_total":"کل تخصیص","aws_last_rekognition":"آخرین تشخیص","aws_region":"منطقه","aws_secret_access_key":"کلید دسترسی مخفی","back":"بازگشت","backup":"پشتیبان‌گیری","backup_and_restore":"پشتیبان‌گیری و بازیابی","backup_download":"دانلود پشتیبان","backup_file":"فایل پشتیبان","backup_info_download":"یک فایل پشتیبان از محیط کامل camera.ui دانلود کنید. این شامل تمام محتویات دایرکتوری ذخیره‌سازی شما خواهد بود که می‌توانید در هر پلتفرمی بازیابی کنید.","backup_info_restore":"یک فایل پشتیبان که قبلا ساخته‌اید را بازیابی کنید. تنظیمات، پایگاه داده، ضبط‌ها و حساب‌های کاربری شما بازیابی خواهد شد.","backup_info_shedule":"هر روز در ساعت 12:00:00 یک پشتیبان کامل از پایگاه داده camera.ui گرفته می‌شود و تا 7 روز نگه‌داری می‌شود.","backup_nav_info":"مدیریت نسخه‌های پشتیبان از طریق رابط کاربری","backup_restore":"بازیابی پشتیبان","backup_restored":"پشتیبان بازیابی شد","backup_shedule":"زمان‌بندی پشتیبان‌گیری","banner_text_doorbell":"زنگ در فعال شد","banner_text_motion":"حرکت جدیدی شناسایی شد","base":"پایه","bitrate":"بیت‌ریت","bitrate_info":"بیت‌ریت استفاده شده برای پخش ویدیو.","bitrate_info_hksv":"حداکثر بیت‌ریت استفاده شده برای HKSV، به کیلوبیت بر ثانیه. اگر تنظیم نشده باشد، هر بیت‌ریتی که HomeKit درخواست کند استفاده خواهد شد.","blgray":"آبی خاکستری","blue":"آبی","blue_gray":"آبی خاکستری","brown":"قهوه‌ای","browse":"مرور","camera":"دوربین","camera_alarm_info":"تنظیمات شناسایی حرکت","camera_already_exists":"دوربین قبلاً وجود دارد","camera_ffmpeg_stream_info":"تنظیمات FFmpeg و جریان","camera_homebridge_info":"تنظیمات Homebridge دوربین","camera_interface_info":"تنظیمات رابط دوربین","camera_notification_info":"تنظیمات اعلان دوربین","camera_player_info":"پارامترهای پخش ویدیو در رابط کاربری","camera_prebuffering_info":"پیش‌بارگذاری جریان دوربین","camera_rekognition_info":"تحلیل تصویر بر اساس شناسایی حرکت","camera_settings_save_info":"فیلدهای علامت‌گذاری شده با (¹) تنها با کلیک بر روی دکمه '✓' ذخیره می‌شوند","camera_videoanalysis_info":"سیستم شناسایی حرکت camera.ui","cameras":"دوربین‌ها","cameras_nav_info":"مدیریت پارامترهای پخش دوربین‌ها","cameras_to_exclude_from_athome":"دوربین‌هایی که باید از حالت 'در خانه' مستثنی شوند","camview":"نمای دوربین","cancel":"لغو","cannot_change_pw":"نمی‌توان رمز عبور را تغییر داد","cannot_login":"نام کاربری و/یا رمز عبور نادرست است","change":"تغییر","change_your_password":"رمز عبور خود را تغییر دهید","charts":"نمودارها","clear":"پاک کردن","close":"بستن","color":"رنگ","confidence":"اعتماد","config":"پیکربندی","config_information":"config.json","config_was_saved":"پیکربندی ذخیره شد","connected":"متصل","console":"کنسول","cpu_load":"بار پردازنده","cpu_temperature":"دمای پردازنده","create_zipped_backup_file":"ایجاد فایل پشتیبان فشرده","custom":"سفارشی","dark":"تاریک","darkmode":"حالت تاریک","dashboard":"داشبورد","database":"پایگاه داده","database_information":"اطلاعات پایگاه داده","database_resetted":"پایگاه داده بازنشانی شد","day":"روز","days":"روزها","debug":"عیب‌یابی","debug_info":"شامل خروجی عیب‌یابی از فرآیند اصلی FFmpeg در لاگ.","december":"دسامبر","disable_info":"دوربین غیرفعال شده و از HomeKit حذف می‌شود.","disabled":"غیرفعال","disk_load":"بار دیسک","disk_space":"فضای دیسک","domain":"دامنه","doorbell":"زنگ در","doorbellSensor_info":"دستگاه زنگ درب برای این دوربین فعال می‌شود. این می‌تواند از طریق کلیدهای مجازی، پیام‌های MQTT یا HTTP فعال شود، بسته به ویژگی‌هایی که در پیکربندی فعال شده‌اند.","download":"دانلود","download_backup_archive":"دانلود آرشیو پشتیبان","download_failed":"دانلود ناموفق بود","drop_files_here":"فایل‌ها را اینجا بکشید","drop_widgets_here":"ویجت‌ها را اینجا بکشید","dwell_time":"زمان توقف","dwell_time_info":"زمان توقف را برای هر شخص در کادر تنظیم کنید. زمان توقف به شما اجازه می‌دهد تا برای چند ثانیه قبل از اینکه کادر شناسایی حرکت حرکت را متوقف کند، حرکت‌ها را ادامه دهید.","email":"ایمیل","email_body_lookup":"جستجوی ایمیل برای","email_body_lookup_info":"اگر camera.ui نتواند نام دوربین را از طریق آدرس ایمیل پیدا کند، می‌توانید یک عبارت را اینجا وارد کنید تا camera.ui بتواند محتوای متنی ایمیل را برای این عبارت جستجو کند و بدین ترتیب دوربین را تعیین کند.","email_from":"ایمیل از","email_from_info":"آدرس ایمیل از (بدون هر چیزی پس از @) که به این دوربین اختصاص داده می‌شود (مثلاً دوربین آزمایشی من. اگر تعریف نشده باشد، نام دوربین استفاده خواهد شد)","email_to":"ایمیل به","email_to_info":"آدرس ایمیل به (بدون هر چیزی پس از @) که به این دوربین اختصاص داده می‌شود (مثلاً دوربین آزمایشی من. اگر تعریف نشده باشد، نام دوربین استفاده خواهد شد)","empty":"خالی","enabled":"فعال","encoder_options":"گزینه‌های کدگذاری","encoder_options_info":"گزینه‌هایی که به کدگذار ویدئو منتقل می‌شود.","encoder_options_info_hksv":"گزینه‌هایی که به کدگذار ویدئو برای فرآیند ضبط HKSV منتقل می‌شود.","endpoints":"نقاط پایانی","enter_new_password":"لطفاً یک رمز عبور جدید وارد کنید","error":"خطا","exclude":"حذف کردن","excludeSwitch_info":"یک سوئیچ 'حذف' را به HomeKit معرفی می‌کند تا دوربین را از تنظیمات رابط کاربری در HomeKit حذف/شامل کند.","existing_rooms":"اتاق‌های موجود","favourite":"مورد علاقه","favourites":"مورد علاقه‌ها","february":"فوریه","ffmpeg_and_stream":"FFmpeg و استریم","field_must_not_be_empty":"فیلد نباید خالی باشد","fill_all_required_fields":"لطفاً همه فیلدهای الزامی را پر کنید","filter":"فیلتر","filters":"فیلترها","finish":"پایان","finish_zone":"منطقه پایان","forceClose_timer":"تنظیم مجدد حرکت بعد از","forceClose_timer_info":"زمان‌سنج به دقیقه که به‌طور خودکار تشخیص حرکت مداوم را بعد از N دقیقه متوقف می‌کند (تنظیم مجدد می‌کند). 0 = غیرفعال. توجه: اگر زمان‌سنج غیرفعال شود، بر عهده دوربین است که چه زمانی تشخیص حرکت \"تمام\" به حساب می‌آید و بنابراین ضبط متوقف می‌شود. این می‌تواند به ضبط‌های بسیار طولانی منجر شود!","forgotpw_content":"اگر رمز عبور خود را فراموش کرده‌اید، می‌توانید با حذف پایگاه داده یا وارد کردن یک نسخه پشتیبان آن را بازیابی کنید.","forgotpw_title":"رمز عبور را فراموش کرده‌اید؟","fps":"فریم در ثانیه","fps_info":"فریم در ثانیه‌ای که برای استریم ویدئو استفاده می‌شود.","fps_info_hksv":"بیشترین فریم‌ریت استفاده‌شده برای HKSV. اگر تنظیم نشود، هر اندازه درخواست‌های HomeKit استفاده می‌شود (-r).","free_disk_space":"فضای خالی دیسک","friday":"جمعه","from":"از","ftp":"FTP","ftp_absolute_path":"مسیر مطلق FTP","ftp_server_config":"پیکربندی سرور FTP","fullscreen":"تمام صفحه","general":"عمومی","general_information":"اطلاعات عمومی","general_settings":"تنظیمات عمومی","go_back":"بازگشت","gray":"خاکستری","green":"سبز","height":"ارتفاع ویدئو","height_info":"ارتفاعی که برای استریم ویدئو استفاده می‌شود.","height_info_hksv":"بیشترین ارتفاع استفاده‌شده برای HKSV. اگر تنظیم نشود، هر اندازه درخواست‌های HomeKit استفاده می‌شود (-s).","help_started":"برای کمک به شما در شروع و ارائه تجربه خوب با camera.ui، لطفاً پیکربندی زیر را کامل کنید.","homebridge_restart_info":"تغییر فیلدهای علامت‌گذاری‌شده با (²) نیاز به راه‌اندازی مجدد Homebridge دارد.","host":"میزبان","hour":"ساعت","hours":"ساعت‌ها","http":"HTTP","http_server_config":"پیکربندی سرور HTTP","image":"تصویر","inactive":"غیرفعال","interface":"رابط","interface_appearance":"ظاهر رابط","interface_config":"پیکربندی رابط","interface_language":"زبان رابط","interface_nav_info":"ایجاد اتاق‌های جدید یا تنظیمات دیگر","interface_player":"پخش‌کننده رابط","invalid_password":"رمز عبور نامعتبر","invalid_username":"نام کاربری نامعتبر","january":"ژانویه","july":"جولای","june":"ژوئن","label":"برچسب","labels":"برچسب‌ها","language":"زبان","last_changed":"آخرین تغییر","last_notification":"آخرین اطلاع‌رسانی","last_recording":"آخرین ضبط","last_updated":"آخرین به‌روزرسانی","light":"نور","list_of_existing_user":"لیست کاربران ثبت‌شده","live":"زنده","livestream":"پخش زنده","livestream_snapshot":"تغییر بین پخش زنده یا بازه تصویر","load":"بار","localhost":"میزبان محلی","localhttp":"HTTP محلی","location":"موقعیت","log":"لاگ","login":"ورود","loglevel":"سطح لاگ","loglevel_info":"فقط سطح لاگ تعریف‌شده را نشان دهید (اطلاعات = نشان دادن پیام‌های اطلاعاتی در حین پردازش. این علاوه بر هشدارها و خطاها است - اشکال‌زدایی: همه چیز را نشان می‌دهد، از جمله اطلاعات اشکال‌زدایی - هشدار: فقط هشدارها و خطاها را نشان می‌دهد - خطا: فقط خطاها را نشان می‌دهد)","manufacturer_info":"نام سازنده را برای نمایش در برنامه Home تنظیم کنید","map_audio":"استریم صوتی","map_audio_info":"استریم مورد استفاده برای صوت (-map) را انتخاب می‌کند.","map_video":"استریم ویدئو","map_video_info":"استریم مورد استفاده برای ویدئو (-map) را انتخاب می‌کند.","march":"مارس","mark_all_as_read":"علامت‌گذاری همه به عنوان خوانده‌شده","master":"اصلی","max_delay":"حداکثر تاخیر","max_delay_info":"هنگام دریافت داده‌ها از طریق UDP، دموکسر تلاش می‌کند بسته‌های دریافتی را دوباره ترتیب دهد (زیرا ممکن است به‌طور نامنظم وارد شوند یا بسته‌ها به‌طور کامل گم شوند). این را می‌توان با تنظیم حداکثر تاخیر دموکس به صفر (-max_delay) غیرفعال کرد.","max_streams":"حداکثر استریم‌ها","max_streams_info":"حداکثر تعداد استریم‌هایی که همزمان به این دوربین اجازه داده می‌شود.","may":"مه","memory":"حافظه","memory_load":"بار حافظه","message":"پیام","mode":"حالت","model_info":"مدل را برای نمایش در برنامه Home تنظیم کنید","monday":"دوشنبه","motion":"حرکت","motionDoorbellSwitch_info":"سوئیچ‌های جعلی را برای تحریک حرکت و/یا زنگ در فعال می‌کند، اگر هرکدام از آنها فعال باشند. وقتی فعال باشد، یک سوئیچ اضافی وجود خواهد داشت که رویداد حرکت یا زنگ در را تحریک می‌کند.","motionDoorbell_info":"زمانی که حرکت فعال می‌شود، زنگ در را به صدا در می‌آورد. این اجازه می‌دهد تا هشدارهای حرکتی در تلویزیون‌های اپل ظاهر شوند.","motionSensor_info":"سنسور حرکت این دوربین را در دسترس قرار می‌دهد. این سنسور می‌تواند با سوئیچ‌های آزمایشی، پیام‌های MQTT یا از طریق HTTP فعال شود، بسته به اینکه کدام ویژگی‌ها در پیکربندی فعال شده‌اند.","motion_message":"پیام حرکت","motion_reset":"حرکت ندارد","motion_timeout":"زمان‌سنج حرکتی","motion_timeout_info":"تعداد ثانیه‌ها پس از تحریک برای ریست کردن سنسور حرکت. برای غیرفعال کردن ریست تحریک حرکت، مقدار آن را به 0 تنظیم کنید.","movement_detected":"حرکت تشخیص داده شد","movement_on":"حرکت روشن","mqtt":"MQTT","mqtt_config":"پیکربندی MQTT","mqtt_publish_topic":"موضوع انتشار MQTT","name":"نام","never":"هرگز","new":"جدید","new_content_available":"محتوای جدید در دسترس است","new_password":"رمز عبور جدید","new_password_verify":"تأیید رمز عبور جدید","new_room":"اتاق جدید","new_zone":"منطقه جدید","next":"بعدی","no_access":"هیچ مجوز دسترسی وجود ندارد","no_camera_selected":"هیچ دوربینی انتخاب نشده است","no_cameras":"هیچ دوربینی وجود ندارد","no_data":"بدون داده","no_data_available":"داده‌ای در دسترس نیست","no_feed":"بدون فید","no_file_selected":"هیچ فایلی انتخاب نشده است","no_label":"بدون برچسب","no_label_matching":"هیچ برچسبی برای پیدا نشد","no_more_cameras":"دوربین بیشتری وجود ندارد","no_more_data":"داده بیشتری وجود ندارد","no_more_notifications":"اعلان بیشتری وجود ندارد","no_more_recordings":"ضبط بیشتری وجود ندارد","no_notifications":"بدون اعلان","no_password_defined":"هیچ رمز عبوری تعریف نشده است","no_permissionlevel_defined":"هیچ سطح دسترسی تعریف نشده است","no_recordings":"بدون ضبط","no_registered_user":"هیچ کاربر ثبت‌نام شده‌ای وجود ندارد","no_results":"بدون نتایج","no_roomname_defined":"هیچ نام اتاقی تعریف نشده است","no_title":"بدون عنوان","no_username_defined":"هیچ نام کاربری تعریف نشده است","notfound_message":"متأسفم، صفحه‌ای که به دنبال آن هستید وجود ندارد.","notification":"اعلان","notification_text":"@ حرکتی جدید در اتاق % شناسایی کرد","notifications":"اعلان‌ها","notifications_alert":"شما در مجموع % اعلان دارید","notifications_nav_info":"تنظیمات Alexa، Telegram و Webhook را مدیریت کنید","november":"نوامبر","now":"اکنون","npm":"NPM","october":"اکتبر","offline":"آفلاین","ok":"اوکی","old_password":"رمز عبور قدیمی","online":"آنلاین","options":"گزینه‌ها","orange":"نارنجی","page_not_found":"صفحه‌ای که درخواست کرده‌اید پیدا نشد.","password":"رمز عبور","password_is_required":"رمز عبور الزامی است","password_not_match":"رمز عبور مطابقت ندارد","password_reenter":"رمز عبور را دوباره وارد کنید","path_is_required":"مسیر الزامی است","path_to_certificate":"مسیر به گواهی","path_to_key":"مسیر به کلید","permission":"اجازه","permission_required":"اجازه الزامی است","permissions":"اجازه‌ها","ping_timeout":"زمان‌سنج پینگ","pink":"صورتی","pixel_difference":"تفاوت پیکسل/رنگ","pixel_difference_info":"تفاوت رنگ لازم برای تحریک حرکت در یک پیکسل (هر چه مقدار کوچکتر باشد، تفاوت رنگ کوچکتر و هر چه مقدار بزرگتر باشد، تفاوت رنگ بزرگتری لازم است تا به عنوان حرکت ثبت شود)","plugins":"افزونه‌ها","port":"پورت","prebuffering":"پیش‌پیش‌پوشانی","prebuffering_info":"فعال‌سازی پیش‌پیش‌پوشانی ویدئوی دوربین.","press_enter_to_create":"برای ایجاد یک برچسب جدید %Enter% را فشار دهید","prev":"قبلی","privacyMode_info":"پخش دوربین را خاموش کرده و آن را با یک تصویر حریم خصوصی در HomeKit جایگزین کنید","privacySwitch_info":"یک سوئیچ 'حالت حریم خصوصی' را در HomeKit برای جایگزینی پخش دوربین با یک تصویر حریم خصوصی ارائه می‌دهد","probe_size":"اندازه پروب","probe_size_info":"اندازه پروب را به بایت تنظیم کنید، یعنی اندازه داده‌ها برای تحلیل برای دریافت اطلاعات جریان. مقدار بالاتر امکان شناسایی اطلاعات بیشتری را در صورت پخش شدن در جریان فراهم می‌کند، اما تأخیر را افزایش می‌دهد. باید عدد صحیحی باشد که کمتر از 32 نباشد. به طور پیش‌فرض 5000000 است (-probesize).","process":"فرآیند","profile":"پروفایل","purple":"بنفش","read_rate":"نرخ خواندن","read_rate_info":"ورودی را با نرخ فریم بومی بخوانید (-re).","reconnect":"دوباره متصل شدن","record_on_movement":"ضبط در حرکت از طریق UI","record_on_movement_info":"فعال‌سازی ضبط ویدیو (به عنوان مثال در هنگام حرکت) از طریق UI و نه از طریق کنترلر خارجی.","recording":"ضبط","recording_text":"@ در % توسط یک # گرفته شد.","recording_time":"زمان ضبط","recording_timer_not_editable":"زمان ضبط قابل ویرایش نیست. تنظیمات را می‌توان در config.json تغییر داد.","recording_type":"نوع ضبط","recording_type_not_editable":"نوع ضبط قابل ویرایش نیست. تنظیمات را می‌توان در config.json تغییر داد.","recordings":"ضبط‌ها","recordings_alert":"شما در مجموع % ضبط دارید و # ضبط انتخاب شده‌اند","recordings_nav_info":"تنظیمات ضبط را مدیریت کرده و نوع ضبط را مشخص کنید","refresh":"بارگذاری مجدد","registered_user":"کاربر ثبت‌نام شده","rekognition":"تشخیص","rekognition_nav_info":"تحلیل تصویر برای تشخیص حرکت از طریق Amazon Rekognition","release_notes":"یادداشت‌های انتشار","reload":"بارگذاری مجدد","remove":"حذف","remove_after":"حذف بعد از","remove_all":"حذف همه","remove_all_confirm":"تأیید حذف همه","remove_all_confirm_text":"پس از کلیک بر روی 'حذف همه' تمام @ ذخیره شده به طور غیرقابل بازگشت حذف خواهد شد. آیا مطمئن هستید؟","remove_camera":"حذف دوربین","remove_camera_confirm_text":"آیا واقعاً می‌خواهید دوربین '@' را حذف کنید؟","remove_camera_confirm_text_homebridge":"آیا واقعاً می‌خواهید دوربین '@' را حذف کنید؟ این همچنین دوربین را از Homebridge حذف خواهد کرد!","removed":"حذف شد","reorder_queue_size":"اندازه صف ترتیب مجدد","reorder_queue_size_info":"بسته‌ها ممکن است به صورت نامرتب دریافت شوند، بنابراین قبل از اینکه بتوانند به جلو منتقل شوند، باید مرتب شوند. اندازه بافر jitter پیش‌فرض 500 است. این گزینه به شما اجازه می‌دهد تا آن را به‌طور دستی مشخص کنید. مقادیر بالاتر منجر به تأخیر بیشتر می‌شود. فقط برای دریافت از طریق UDP (-reorder_queue_size) کاربردی است.","reports":"گزارش‌ها","reset":"بازنشانی","reset_confirm":"تأیید بازنشانی","reset_confirm_text":"پس از کلیک بر روی 'بازنشانی' تمام داده‌های ذخیره شده به طور غیرقابل بازگشت حذف خواهد شد. آیا مطمئن هستید؟","restart":"راه‌اندازی مجدد","restart_cameraui":"لطفاً دوربین.ui را راه‌اندازی مجدد کنید","restart_confirm":"تأیید راه‌اندازی مجدد","restart_confirm_text":"آیا واقعاً می‌خواهید @ را دوباره راه‌اندازی کنید؟","restore":"بازیابی","restore_from_backup_file":"بازیابی از آرشیو پشتیبان","room":"اتاق","room_already_exists":"اتاق قبلاً وجود دارد","room_name":"نام اتاق","rooms":"اتاق‌ها","rss":"آر‌اس‌اس","rss_feed":"خوراک آر‌اس‌اس","rss_feed_widget_info":"لطفاً یک URL آر‌اس‌اس معتبر وارد کنید تا خوراک را در ویجت مشاهده کنید.","rss_url":"URL آر‌اس‌اس","rtsp_transport":"حمل و نقل RTSP","rtsp_transport_info":"پروتکل‌های حمل و نقل RTSP را تنظیم کنید (-rtsp_transport).","saturday":"شنبه","save":"ذخیره","save_as":"ذخیره به عنوان","save_path":"مسیر ذخیره","seconds":"ثانیه‌ها","select":"انتخاب","selected":"انتخاب شده","selected_camera":"دوربین انتخاب شده","sensitivity":"حساسیت","sensitivity_info":"درصد پیکسل‌ها (به تفاوت‌ها نگاه کنید) که برای تحریک یک حرکت لازم است (حساسیت پایین به این معنی است که باید تفاوت‌های بیشتری در پیکسل‌ها شناسایی شود، حساسیت بالا به این معنی است که تفاوت‌های کمتری در پیکسل‌ها باید شناسایی شود)","september":"سپتامبر","serialNr":"شماره سریال","serialNumber_info":"شماره سریال را برای نمایش در برنامه Home تنظیم کنید","server":"سرور","server_information":"اطلاعات سرور","settings":"تنظیمات","shortcuts":"میانبرها","shortcuts_widget_info":"لطفاً از لیست عملیاتی را برای نمایش در میانبرها انتخاب کنید.","signin":"ورود","signout":"خروج","signout_after":"خروج بعد از","smtp":"SMTP","smtp_server_config":"پیکربندی سرور SMTP","snapshot":"عکس فوری","snapshot_timer":"زمان‌سنج عکس فوری","source":"منبع ویدیو","source_info":"گزینه‌های FFmpeg برای یافتن و نحوه رمزگشایی جریان ویدیوی دوربین شما. ساده‌ترین شکل '-i' به دنبال URL دوربین شما است.","source_info_hksv":"در اینجا می‌توانید یک منبع ویدیوی سفارشی فقط برای ضبط‌های HKSV تنظیم کنید.","space_replace":"جایگزینی فاصله","speaker_end_time":"زمان پایان سخنران","speaker_start_time":"زمان شروع سخنران","ssl":"SSL","ssl_config":"پیکربندی SSL","standard":"استاندارد","start":"شروع","start_end_message":"و این همه چیز است. <br> از دوربین.ui لذت ببرید!","start_info_message":"شما باید اعتبارنامه‌های خود را تغییر دهید <br> قبل از ورود به دوربین.ui","status":"وضعیت","still_image_source":"منبع تصویر","still_image_source_info":"اگر دوربین شما همچنین یک URL برای یک تصویر ثابت ارائه می‌دهد، می‌توان آن را اینجا با همان نحو 'source' تعریف کرد. اگر تنظیم نشود، دوربین.ui یک فریم از 'source' خواهد گرفت.","stop":"متوقف کردن","stream_timeout":"زمان انقضای جریان","sub_source_info":"زیرجریان با وضوح پایین. گزینه‌های FFmpeg برای یافتن و نحوه رمزگشایی زیرجریان ویدیوی دوربین شما. ساده‌ترین شکل '-i' به دنبال URL دوربین شما است. زیرجریان برای جستجوی جریان یا برای شناسایی حرکت از طریق تجزیه و تحلیل ویدیو استفاده خواهد شد.","successfull":"موفق","successfully_added_camera":"دوربین با موفقیت اضافه شد","successfully_changed":"با موفقیت تغییر یافت","successfully_created":"با موفقیت ایجاد شد","successfully_removed":"با موفقیت حذف شد","sunday":"یکشنبه","sunny":"آفتابی","system":"سیستم","system_nav_info":"مدیریت تنظیمات پشتیبان دوربین.ui","system_restart_initiated":"راه‌اندازی مجدد سیستم آغاز شد","system_successfully_restarted":"سیستم با موفقیت راه‌اندازی مجدد شد","system_successfully_updated":"سیستم با موفقیت به‌روزرسانی شد","system_update_initiated":"به‌روزرسانی سیستم آغاز شد","telegram":"تلگرام","telegram_message_type":"نوع پیام تلگرام","telegram_type_not_editable":"نوع تلگرام برای این دوربین قابل تغییر نیست.","temperature":"دمای","text":"متن","theme":"تم","themes":"تم‌ها","thursday":"پنجشنبه","time":"زمان","timeout":"زمان انقضا","timeout_info":"زمان انقضای ورودی/خروجی TCP سوکت در ثانیه. اگر با مشکلاتی در پردازش‌های FFmpeg در پس‌زمینه روبرو هستید، می‌توانید هر مقداری اینجا وارد کنید تا پردازش به‌طور خودکار پس از زمان وارد شده متوقف شود، اگر پاسخی نیاید (-stimeout).","timerange":"محدوده زمانی","timestamp":"زمان‌نگار","to":"به","total":"جمع","tuesday":"سه‌شنبه","typ":"نوع","unbridge_info":"دوربین‌های بریج شده می‌توانند باعث کاهش سرعت کل نمونه Homebridge شوند. اگر بریج نشوند، دوربین باید به صورت دستی به HomeKit اضافه شود.","undo":"بازگشت","up_to_date":"به‌روز","update":"به‌روزرسانی","update_available":"به‌روزرسانی در دسترس است","update_or_downgrade":"به‌روزرسانی/کاهش نسخه","upload_backup_archive":"بارگذاری آرشیو پشتیبان","uptime":"زمان فعالیت","use_interface_timer":"تایمر ضبط رابط","use_interface_timer_info":"اگر فعال باشد، تایمر ضبط از camera.ui برای \"motionTimeout\" استفاده خواهد شد.","user":"کاربر","user_list":"لیست کاربران","username":"نام کاربری","username_already_exists":"نام کاربری قبلاً وجود دارد","username_is_required":"نام کاربری الزامی است","users":"کاربران","users_nav_info":"حذف کاربران موجود یا ایجاد کاربران جدید","utilization":"استفاده","verification_not_successfull":"تأیید ناموفق بود","version":"نسخه","video":"ویدیو","video_codec":"کدک ویدیو","video_codec_info":"کدکی که برای رمزگذاری ویدیو ارسال شده به HomeKit استفاده می‌شود را تنظیم کنید، باید بر پایه H.264 باشد. می‌توانید با این گزینه به یک کدک ویدیویی تسریع‌شده سخت‌افزاری تغییر دهید، اگر موجود باشد (-vcodec).","video_codec_info_hksv":"کدکی که برای رمزگذاری ویدیو برای HKSV استفاده می‌شود را تنظیم کنید، باید بر پایه H.264 باشد. می‌توانید با این گزینه به یک کدک ویدیویی تسریع‌شده سخت‌افزاری تغییر دهید، اگر موجود باشد (-vcodec).","video_filter":"فیلتر ویدیو","video_filter_info":"لیست جداشده با ویرگول از فیلترهای اضافی ویدیویی که باید برای FFmpeg روی ویدیو اجرا شود. اگر 'none' شامل شود، فیلترهای ویدیویی پیش‌فرض غیرفعال می‌شوند (-filter:v).","video_processor_config":"تنظیمات پردازنده ویدیو","video_processor_path":"مسیر پردازنده ویدیو","video_resolution":"رزولوشن ویدیو","videoanalysis":"تحلیل ویدیو","videoanalysis_info":"تحلیل ویدیو را برای تشخیص حرکت فعال می‌کند (یک زیرجریان با رزولوشن پایین ترجیح داده می‌شود یا پیش‌بافرینگ فعال می‌شود)","warning":"هشدار","weather":"آب و هوا","weather_widget_info":"لطفاً نام شهر خود را به زبان انگلیسی جستجو کنید تا ویجت آب و هوا فعال شود.","weather_widget_info_owm":"داده‌های آب و هوا توسط OpenWeather ارائه می‌شود.","webhook":"Webhook","webhook_url":"URL وب‌هوک","wednesday":"چهارشنبه","welcome_back":"خوش آمدید دوباره","welcome_message":"به","welcome_submessage":"رابط وب برای دوربین‌های RTSP شما","widgets":"ویجت‌ها","width":"عرض ویدیو","width_info":"عرض مورد استفاده برای جریان ویدیو.","width_info_hksv":"حداکثر عرض مورد استفاده برای HKSV. اگر تنظیم نشود، هر اندازه‌ای که HomeKit درخواست کند استفاده خواهد شد (-s).","yellow":"زرد"}}')
    },
    c9d6: function (e, t, a) {
        "use strict";
        a("99af");
        var i = a("daa8");
        t["a"] = Object(i["a"])(location.host, {
            autoConnect: !1,
            reconnection: !0,
            reconnectionDelay: 500,
            maxReconnectionAttempts: 1 / 0
        })
    },
    d8e5: function (e, t, a) {},
    db67: function (e, t, a) {
        e.exports = a.p + "img/logo_animated.f1d93d47.svg"
    },
    def6: function (e, t, a) {},
    e4b1: function (e, t, a) {
        "use strict";
        a("a2af")
    },
    eaf8: function (e, t, a) {
        "use strict";
        a("2557")
    },
    ec74: function (e, t, a) {},
    f64a: function (e, t, a) {
        "use strict";
        a("b078")
    }
});