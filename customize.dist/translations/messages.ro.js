define(function () {
    var out = {};

    out.main_title = "CryptPad: Zero Knowledge, Colaborare n timp real";
    out.main_slogan = "Puterea stă n cooperare - Colaborarea este cheia";

    out.type = {};
    out.pad = "Rich text";
    out.code = "Code";
    out.poll = "Poll";
    out.slide = "Presentation";
    out.drive = "Drive";
    out.whiteboard = "Whiteboard";
    out.file = "File";
    out.media = "Media";

    out.button_newpad = "Filă Text Nouă";
    out.button_newcode = "Filă Cod Nouă";
    out.button_newpoll = "Sondaj Nou";
    out.button_newslide = "Prezentare Noua";
    out.button_newwhiteboard = "Fila Desen Noua";
    out.updated_0_common_connectionLost = "<b>Conexiunea la server este pierdută</b><br>Până la revenirea conexiunii, vei fi n modul citire";
    out.common_connectionLost = out.updated_0_common_connectionLost;
    out.websocketError = "Conexiune inexistentă către serverul websocket...";
    out.typeError = "Această filă nu este compatibilă cu aplicația aleasă";
    out.onLogout = "Nu mai ești autentificat, <a href=\"/\" target=\"_blank\">apasă aici</a> să te autentifici<br>sau apasă <em>Escape</em>să accesezi fila n modul citire.";
    out.wrongApp = "Momentan nu putem arăta conținutul sesiunii n timp real n fereastra ta. Te rugăm rencarcă pagina.";
    out.loading = "Încarcă...";
    out.error = "Eroare";

    out.saved = "Salvat";
    out.synced = "Totul a fost salvat";
    out.deleted = "Pad șters din CryptDrive-ul tău";
    out.disconnected = "Deconectat";
    out.synchronizing = "Se sincronizează";
    out.reconnecting = "Reconectare...";
    out.lag = "Decalaj";
    out.readonly = "Mod citire";
    out.anonymous = "Anonim";
    out.yourself = "Tu";
    out.anonymousUsers = "editori anonimi";
    out.anonymousUser = "editor anonim";
    out.users = "Utilizatori";
    out.and = "Și";
    out.viewer = "privitor";
    out.viewers = "privitori";
    out.editor = "editor";
    out.editors = "editori";
    out.language = "Limba";
    out.upgrade = "Actualizare";
    out.upgradeTitle = "Actualizează-ți contul pentru a mări limita de stocare";
    out.MB = "MB";
    out.greenLight = "Totul funcționează corespunzător";
    out.orangeLight = "Conexiunea lentă la internet ți poate afecta experiența";
    out.redLight = "Ai fost deconectat de la sesiune";
    out.pinLimitReached = "Ai atins limita de stocare";
    out.pinLimitReachedAlert = "Ai atins limita de stocare. Noile pad-uri nu vor mai fi stocate n CryptDrive.<br>Pentru a rezolva această problemă, poți să nlături pad-uri din CryptDrive-ul tău (incluzând gunoiul) sau să subscrii la un pachet premium pentru a ți extinde spațiul de stocare.";
    out.pinLimitNotPinned = "Ai atins limita de stocare.<br>Acest pad nu va fi stocat n CryptDrive-ul tău.";
    out.pinLimitDrive = "Ai atins limita de stocare.<br>Nu poți să creezi alte pad-uri.";
    out.importButtonTitle = "Importă un pad dintr-un fișier local";
    out.exportButtonTitle = "Exportă pad-ul acesta către un fișier local";
    out.exportPrompt = "Cum ai vrea să ți denumești fișierul?";
    out.changeNamePrompt = "Schimbă-ți numele (lasă necompletat dacă vrei să fii anonim): ";
    out.user_rename = "Schimbă numele afișat";
    out.user_displayName = "Nume afișat";
    out.user_accountName = "Nume cont";
    out.clickToEdit = "Click pentru editare";
    out.forgetButtonTitle = "Mută acest pad la gunoi";
    out.forgetPrompt = "Click-ul pe OK va muta acest pad la gunoi. Ești sigur?";
    out.movedToTrash = "Acest pad a fost mutat la gunoi.<br><a href=\"/drive/\">Acesează-mi Drive-ul</a>";
    out.shareButton = "Distribuie";
    out.shareSuccess = "Link copiat n clipboard";
    out.newButton = "Nou";
    out.newButtonTitle = "Crează un nou pad";
    out.saveTemplateButton = "Salvează ca șablon";
    out.saveTemplatePrompt = "Alege un titlu pentru șablon";
    out.templateSaved = "Șablon salvat!";
    out.selectTemplate = "Selectează un șablon sau apasă escape";
    out.presentButtonTitle = "Intră n modul de prezentare";
    out.presentSuccess = "Apasă ESC pentru a ieși din modul de prezentare";
    out.backgroundButtonTitle = "Schimbă culoarea de fundal din prezentare";
    out.colorButtonTitle = "Schimbă culoarea textului n modul de prezentare";
    out.printButton = "Printează (enter)";
    out.printButtonTitle = "Printează-ți slide-urile sau exportă-le ca fișier  PDF";
    out.printOptions = "Opțiuni schemă";
    out.printSlideNumber = "Afișează numărul slide-ului";
    out.printDate = "Afișează data";
    out.printTitle = "Afișează titlul pad-ului";
    out.printCSS = "Reguli de stil personalizate (CSS):";
    out.printTransition = "Permite tranziția animațiilor";
    out.slideOptionsTitle = "Personalizează-ți slide-urile";
    out.slideOptionsButton = "Salvează (enter)";
    out.editShare = "Editează link-ul";
    out.editShareTitle = "Copiază link-ul de editare n clipboard";
    out.editOpen = "Deschide link-ul de editare ntr-o nouă filă";
    out.editOpenTitle = "Deschide acest pad n modul de editare ntr-o nouă filă";
    out.viewShare = "Link n modul citire";
    out.viewShareTitle = "Copiază link-ul n modul de citire n clipboard";
    out.viewOpen = "Deschide link-ul n modul de citire ntr-o filă nouă";
    out.viewOpenTitle = "Deschide acest pad n modul de citire ntr-o nouă filă";
    out.notifyJoined = "{0} s-au alăturat sesiunii colaborative";
    out.notifyRenamed = "{0} e cunoscut ca {1}";
    out.notifyLeft = "{0} au părăsit sesiunea colaborativă";
    out.okButton = "OK (enter)";
    out.cancel = "Anulează";
    out.cancelButton = "Anulează (esc)";
    out.historyButton = "Afișează istoricul documentului";
    out.history_next = "Mergi la versiunea următoare";
    out.history_prev = "Mergi la versiunea trecută";
    out.history_goTo = "Mergi la sesiunea selectată";
    out.history_close = "Înapoi";
    out.history_closeTitle = "Închide istoricul";
    out.history_restore = "Restabilește";
    out.history_restoreTitle = "Restabilește versiunea selectată a documentului";
    out.history_restorePrompt = "Ești sigur că vrei să nlocuiești versiunea curentă a documentului cu cea afișată?";
    out.history_restoreDone = "Document restabilit";
    out.history_version = "Versiune:";
    out.poll_title = "Zero Knowledge Selector Dată";
    out.poll_subtitle = "Zero Knowledge, <em>realtime</em> programare";
    out.poll_p_save = "Setările tale sunt actualizate instant, așa că tu nu trebuie să salvezi.";
    out.poll_p_encryption = "Tot conținutul tău este criptat ca doar persoanele cărora tu le dai link-ul să aibă acces. Nici chiar serverul nu poate să vadă ce modifici.";
    out.wizardLog = "Click pe butonul din dreapta sus pentru a te ntoarce la sondajul tău";
    out.wizardTitle = "Folosește wizard-ul pentru a crea sondajul tău";
    out.wizardConfirm = "Ești pregătit să adaugi aceste opțiuni la sondajul tău?";
    out.poll_publish_button = "Publică";
    out.poll_admin_button = "Admin";
    out.poll_create_user = "Adaugă un nou utilizator";
    out.poll_create_option = "Adaugă o nouă opțiune";
    out.poll_commit = "Comite";
    out.poll_closeWizardButton = "Închide wizard-ul";
    out.poll_closeWizardButtonTitle = "Închide wizard-ul";
    out.poll_wizardComputeButton = "Calculează Opțiunile";
    out.poll_wizardClearButton = "Curăță Tabelul";
    out.poll_wizardDescription = "Crează automat un număr de opțiuni introducând orice număr de zile sau intervale orare";

    out.poll_wizardAddDateButton = "+ Zi";
    out.poll_wizardAddTimeButton = "+ Ore";
    out.poll_optionPlaceholder = "Opțiune";
    out.poll_userPlaceholder = "Numele tău";
    out.poll_removeOption = "Ești sigur că vrei să ndepărtezi această opțiune?";
    out.poll_removeUser = "Ești sigur că vrei să ndepărtezi aceast utilizator?";
    out.poll_titleHint = "Titlu";
    out.poll_descriptionHint = "Descrie sondajul, și apoi folosește butonul 'publică' când ai terminat. Orice utilizator care are link-ul poate modifica descrierea, dar descurajăm această practică.";
    out.canvas_clear = "Curăță";
    out.canvas_delete = "Curăță selecția";
    out.canvas_disable = "Dezactivează modul desen";
    out.canvas_enable = "Activează modul desen";
    out.canvas_width = "Lățime";
    out.canvas_opacity = "Opacitate";
    out.fm_rootName = "Documente";
    out.fm_trashName = "Gunoi";
    out.fm_unsortedName = "Fișiere nesortate";
    out.fm_filesDataName = "Toate fișierele";
    out.fm_templateName = "Șabloane";
    out.fm_searchName = "Caută";
    out.fm_searchPlaceholder = "Caută...";
    out.fm_newButton = "Nou";
    out.fm_newButtonTitle = "Crează un nou pad sau folder";
    out.fm_newFolder = "Folder nou";
    out.fm_newFile = "Pad nou";
    out.fm_folder = "Folder";
    out.fm_folderName = "Numele folderului";
    out.fm_numberOfFolders = "# de foldere";
    out.fm_numberOfFiles = "# of files";
    out.fm_fileName = "File name";
    out.fm_title = "Titlu";
    out.fm_type = "Tip";
    out.fm_lastAccess = "Ultima accesare";
    out.fm_creation = "Creare";
    out.fm_forbidden = "Acțiune interzisă";
    out.fm_originalPath = "Ruta inițială";
    out.fm_openParent = "Arată n folder";
    out.fm_noname = "Document nedenumit";
    out.fm_emptyTrashDialog = "Ești sigur că vrei să golești coșul de gunoi?";
    out.fm_removeSeveralPermanentlyDialog = "Ești sigur că vrei să ștergi pentru totdeauna aceste {0} elements din coșul de gunoi?";
    out.fm_removePermanentlyDialog = "Ești sigur că vrei să ștergi acest element pentru totdeauna?";
    out.fm_removeSeveralDialog = "Ești sigur că vrei să muți aceste {0} elemente la coșul de gunoi?";
    out.fm_removeDialog = "Ești sigur că vrei să muți {0} la gunoi?";
    out.fm_restoreDialog = "Ești sigur că vrei să restabilești {0} n locația trecută?";
    out.fm_unknownFolderError = "Ultima locație vizitată sau cea selectată nu mai există. Deschidem fișierul părinte...";
    out.fm_contextMenuError = "Nu putem deschide meniul de context pentru acest element. Dacă problema persistă, rencarcă pagina.";
    out.fm_selectError = "Nu putem selecta elementul vizat. Dacă Unable to select the targeted element. Dacă problema persistă, rencarcă pagina.";
    out.fm_categoryError = "Nu putem deschide categoria selectată, afișează sursa.";
    out.fm_info_root = "Crează câte foldere tip cuib ai nevoie pentru a ți sorta fișierele.";
    out.fm_info_unsorted = "Conține toate fișierele pe care le-ai vizitat și nu sunt sortate n \"Documente\" sau mutate n \"Gunoi\".";
    out.fm_info_template = "Conține toate pad-urile stocate ca șabloane și pe care le poți refolosi atunci când creezi un nou pad.";
    out.fm_info_trash = "Fișierele șterse din gunoi vor fi șterse și din \"Toate fișierele\", făcând imposibilă recuperarea fișierelor din managerul de fișiere.";
    out.fm_info_allFiles = "Conține toate fișierele din \"Documente\", \"Nesortate\" și \"Gunoi\". Poți să muți sau să ștergi fișierele aici.";
    out.fm_info_login = "Loghează-te";
    out.fm_info_register = "Înscrie-te";
    out.fm_info_anonymous = "Nu ești logat cu un cont valid așa că aceste pad-uri vor fi șterse (<a href=\"https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/\" target=\"_blank\">află de ce</a>). <a href=\"/register/\">Înscrie-te</a> sau <a href=\"/login/\">Loghează-te</a> pentru a le salva.";
    out.fm_alert_backupUrl = "Link copie de rezervă pentru acest drive.<br> Este <strong>foarte recomandat</strong> să o păstrezi pentru tine.<br>Poți să o folosești pentru a recupera toate fișierele n cazul n care memoria browserului tău este șterge..<br>Oricine are linkul poate să editeze sau să ndepărteze toate fișierele din managerul tău de documente.<br>";
    out.fm_alert_anonymous = "Salut, momentan folosești CryptPad n mod anonim. Este ok, doar că fișierele tale vor fi șterse după o perioadă de inactivitate. Am dezactivat caracteristicile avansate ale drive-ului pentru utilizatorii anonimi pentru a face clar faptul că stocare documentelor acolo nu este o metodă sigură. Poți să <a href=\"https://blog.cryptpad.fr/2017/05/17/You-gotta-log-in/\" target=\"_blank\">citești mai multe</a> despre motivarea noastră și despre ce de trebuie să te <a href=\"/register/\">Înregistrezi</a> and <a href=\"/login/\">Loghezi</a>.";
    out.fm_backup_title = "Link de backup";
    out.fm_nameFile = "Cum ai vrea să numești fișierul?";
    out.fc_newfolder = "Folder nou";
    out.fc_rename = "Redenumește";
    out.fc_open = "Deschide";
    out.fc_open_ro = "Deschide (modul citire)";
    out.fc_delete = "Șterge";
    out.fc_restore = "Restaurează";
    out.fc_remove = "Șterge permanent";
    out.fc_empty = "Curăță coșul";
    out.fc_prop = "Proprietăți";
    out.fc_sizeInKilobytes = "Dimensiune n Kilobytes";
    out.fo_moveUnsortedError = "Nu poți să muți un folder la lista de pad-uri nesortate";
    out.fo_existingNameError = "Numele ales este deja folosit n acest director. Te rugăm să alegi altul.";
    out.fo_moveFolderToChildError = "Nu poți să muți un folder ntr-unul dintre descendenții săi";
    out.fo_unableToRestore = "Nu am reușit să restaurăm fișierul n locația de origine. Poți să ncerci să l muți ntr-o nouă locație.";
    out.fo_unavailableName = "Un fișier sau un folder cu același nume există deja n locația nouă. Redenumește elementul și ncearcă din nou.";
    out.login_login = "Loghează-te";
    out.login_makeAPad = "Crează un pad n modul anonim";
    out.login_nologin = "Răsfoiește pad-urile locale";
    out.login_register = "Înscrie-te";
    out.logoutButton = "Deloghează-te";
    out.settingsButton = "Setări";
    out.login_username = "Nume utilizator";
    out.login_password = "Parolă";
    out.login_confirm = "Confirmă parola";
    out.login_remember = "Ține-mă minte";
    out.login_hashing = "Încriptăm parola, o să mai dureze.";
    out.login_hello = "Salut {0},";
    out.login_helloNoName = "Salut,";
    out.login_accessDrive = "Acesează-ți drive-ul";
    out.login_orNoLogin = "sau";
    out.login_noSuchUser = "Nume de utilizator sau parolă invalide. Încearcă din nou sau nscrie-te.";
    out.login_invalUser = "Nume utilizator cerut";
    out.login_invalPass = "Parolă cerută";
    out.login_unhandledError = "O eroare neașteptată a avut loc emoticon_unhappy";
    out.register_importRecent = "Importă istoricul pad-ului (Recomandat)";
    out.register_acceptTerms = "Accept <a href='/terms.html'>termenii serviciului</a>";
    out.register_passwordsDontMatch = "Parolele nu se potrivesc!";
    out.register_mustAcceptTerms = "Trebuie să accepți termenii serviciului";
    out.register_mustRememberPass = "Nu putem să ți resetăm parola dacă o uiți. Este foarte important să o ții minte! Bifează căsuța pentru a confirma.";
    out.register_header = "Bine ai venit n CryptPad";
    out.register_explanation = "<p>Hai să stabilim câteva lucruri, mai ntâi</p><ul><li>Parola ta este cheia secretă care criptează toate pad-urile tale. Dacă pierzi/uiți parola nu există nici-o metodă prin care ți putem recupera datele.</li><li>Poți importa pad-uri care au fost vizionate recent n browser pentru a le avea n cont.</li><li>Dacă folosești un computer mpărțit, trebuie să te deloghezi, nchiderea taburilor nu este de ajuns.</li></ul>";
    out.register_writtenPassword = "Mi-am notat numele de utilizator și parola, naintează.";
    out.register_cancel = "Întoarce-te";
    out.register_warning = "Zero Knowledge nseamnă că noi nu ți putem recupera datele dacă ți pierzi parola.";
    out.register_alreadyRegistered = "Acest user există deja, vrei să te loghezi?";
    out.settings_title = "Setări";
    out.settings_save = "Salvează";
    out.settings_backupTitle = "Fă o copie de rezervă sau restaurează toate datele";
    out.settings_backup = "Copie de rezervă";
    out.settings_restore = "Restaurează";
    out.settings_resetTitle = "Curăță-ți drive-ul";
    out.settings_reset = "Îndepărtează toate fișierele și folderele din CryptPad-ul tău.";
    out.settings_resetPrompt = "Această acțiune o să ndepărteze toate pad-urile din drive-ul tău.<br>Ești sigur că vrei să continui?<br>Type “<em>Iubesc CryptPad</em>” pentru a confirma.";
    out.settings_resetDone = "Drive-ul tău este acum gol!";
    out.settings_resetError = "Text de verificare incorrect. CryptPad-ul tău nu a fost schimbat.";
    out.settings_resetTips = "Sfaturi n CryptDrive";
    out.settings_resetTipsButton = "Resetează sfaturile disponibile n CryptDrive";
    out.settings_resetTipsDone = "Toate sfaturile sunt vizibile din nou.";
    out.settings_importTitle = "Importă pad-urile recente ale acestui browser n CryptDrive-ul meu";
    out.settings_import = "Importă";
    out.settings_importConfirm = "Ești sigur că vrei să imporți pad-urile recente ale acestui browser n contul tău de CryptDrive?";
    out.settings_importDone = "Import complet";
    out.settings_userFeedbackHint1 = "CryptPad oferă niște feedback foarte simplu serverului, pentru a ne informa cum putem să ți mbunătățim experiența voastră.";
    out.settings_userFeedbackHint2 = "Conținutul pad-ului tău nu va fi mpărțit cu serverele.";
    out.settings_userFeedback = "Activează feedback";
    out.settings_anonymous = "Nu ești logat. Setările sunt specifice browser-ului.";
    out.settings_publicSigningKey = "Cheia de semnătură publică";
    out.settings_usage = "Uzaj";
    out.settings_usageTitle = "Vezi dimensiunea totală a pad-urilor fixate n MB";
    out.settings_pinningNotAvailable = "Pad-urile fixate sunt disponibile doar utilizatorilor nregistrați.";
    out.settings_pinningError = "Ceva nu a funcționat";
    out.settings_usageAmount = "Pad-urile tale fixate ocupă {0}MB";
    out.settings_logoutEverywhereTitle = "Deloghează-te peste tot";
    out.settings_logoutEverywhere = "Deloghează-te din toate sesiunile web";
    out.settings_logoutEverywhereConfirm = "Ești sigur? Va trebui să te loghezi, din nou, pe toate device-urile tale.";
    out.upload_serverError = "Eroare de server: fișierele tale nu pot fi ncărcate la momentul acesta.";
    out.upload_uploadPending = "Ai deja o ncărcare n desfășurare. Anulezi si ncarci noul fișier?";
    out.upload_success = "Fișierul tău ({0}) a fost ncărcat și adăugat la drive-ul tău cu succes.";
    out.main_p2 = "Acest proiect folosește <a href=\"http://ckeditor.com/\">CKEditor</a> Visual Editor, <a href=\"https://codemirror.net/\">CodeMirror</a>, și <a href=\"https://github.com/xwiki-contrib/chainpad\">ChainPad</a> un motor n timp real.";
    out.main_howitworks_p1 = "CryptPad folosește o variantă a algoritmului de <a href=\"https://en.wikipedia.org/wiki/Operational_transformation\">Operational transformation</a> care este capabil să găsescă consens distribuit folosind <a href=\"https://bitcoin.org/bitcoin.pdf\">Nakamoto Blockchain</a>, o construcție popularizată de <a href=\"https://en.wikipedia.org/wiki/Bitcoin\">Bitcoin</a>. Astfel algoritmul poate evita nevoia ca serverul central să rezove conflicte, iar serverul nu este interesat de conținutul care este editat n pad.";
    out.main_about_p2 = "Dacă ai orice fel de ntrebare sau comentariu, poți să ne <a href=\"https://twitter.com/cryptpad\">dai un tweet</a>, semnalezi o problemă <a href=\"https://github.com/xwiki-labs/cryptpad/issues/\" title=\"index de probleme\">on github</a>, spui salut pe IRC (<a href=\"http://webchat.freenode.net?channels=%23cryptpad&uio=MT1mYWxzZSY5PXRydWUmMTE9Mjg3JjE1PXRydWUe7\" title=\"freenode webchat\">irc.freenode.net</a>), sau <a href=\"research@xwiki.com\">trimiți un email</a>.";
    out.main_info = "<h1>Colaborează n siguranță</h1><br> Dezvoltă-ți ideile mpreună cu documente partajate n timp ce tehnologia <strong>Zero Knowledge</strong> ți păstrează securitatea; chiar și de noi.";
    out.main_howitworks = "Cum funcționează";
    out.main_zeroKnowledge = "Zero Knowledge";
    out.main_zeroKnowledge_p = "Nu trebuie să ne crezi că <em>nu ne uităm</em> la pad-urile tale, cu tehnologia revoluționară Zero Knowledge a CryptPad <em>nu putem</em>. Învață mai multe despre cum ți protejăm Learn more about how we protect your <a href=\"/privacy.html\" title='Intimitatea'>Intimitate și Securitate</a>.";
    out.main_writeItDown = "Notează";
    out.main_writeItDown_p = "Cele mai importante proiecte vin din idei mici. Notează-ți momentele de inspirație și ideile neașteptate pentru că nu știi niciodată care ar putea fi noua mare descoperire.";
    out.main_share = "Partajează link-ul, partajează pad-ul";
    out.main_share_p = "Dezvoltă-ți ideile mpreună: organizează ntâlniri eficiente, colaborează pe liste TODO și fă prezentări scurte cu toți prietenii tăi și device-urile tale.";
    out.main_organize = "Organizează-te";
    out.main_organize_p = "Cu CryptPad Drive, poți să stai cu ochii pe ce este important.  Folderele ți permit să ții evidența proiectelor tale și să ai o viziune globală asupra evoluției lucrurilor.";
    out.tryIt = "Testează!";
    out.main_richText = "Rich Text editor";
    out.main_richText_p = "Editează texte complexe n mod colaborativ cu Zero Knowledge n timp real. <a href=\"http://ckeditor.com\" target=\"_blank\">CkEditor</a> application.";
    out.main_code = "Editor cod";
    out.main_code_p = "Editează cod din softul tău, n mod colaborativ, cu Zero Knowledge n timp real.<a href=\"https://www.codemirror.net\" target=\"_blank\">CodeMirror</a> application.";
    out.main_slide = "Editor slide-uri";
    out.main_slide_p = "Crează-ți prezentări folosind sintaxa Markdown, și afișează-le n browser-ul tău.";
    out.main_poll = "Sondaj";
    out.main_poll_p = "Plănuiește ntâlniri sau evenimente, sau votează pentru cea mai bună soluție pentru problema ta.";
    out.main_drive = "CryptDrive";
    out.footer_applications = "Aplicații";
    out.footer_contact = "Contact";
    out.footer_aboutUs = "Despre noi";
    out.about = "Despre";
    out.privacy = "Privacy";
    out.contact = "Contact";
    out.terms = "ToS";
    out.blog = "Blog";
    out.policy_title = "Politica de confidențialitate CryptPad";
    out.policy_whatweknow = "Ce știm despre tine";
    out.policy_whatweknow_p1 = "Ca o aplicație care este găzduită online, CryptPad are acces la metadatele expuse de protocolul HTTP. Asta include adresa IP-ului tău, și alte titluri HTTP care pot fi folosite ca să identifice un browser. Poți să vezi ce informații mpărtășește browser-ul tău vizitând <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending\" title=\"what http headers is my browser sending\">WhatIsMyBrowser.com</a>.";
    out.policy_whatweknow_p2 = "Folosim <a href=\"https://www.elastic.co/products/kibana\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"platforma de analiză open source\">Kibana</a>, o platformă open source, pentru a afla mai multe despre utilizatorii noștri. Kibana ne spune despre cum ai găsit CryptPad, căutare  directă, printr-un motor de căutare, sau prin recomandare de la un alt serviciu online ca Reddit sau Twitter.";
    out.policy_howweuse = "Cum folosim ce aflăm";
    out.policy_howweuse_p1 = "Folosim aceste informații pentru a lua decizii mai bune n promovarea CryptPad, prin evaluarea eforturilor trecute care au fost de succes. Informațiile despre locația ta ne ajută să aflăm dacă ar trebui să oferim suport pentru alte limbi, pe lângă engleză.";
    out.policy_howweuse_p2 = "Informațiile despre browser-ul tău (dacă este bazat pe un sistem de operare desktop sau mobil) ne ajută să luăm decizii când prioritizăm viitoare mbunătățiri. Echipa noastră de development este mică, și ncercăm să facem alegeri care să mbunătățească experiența câtor mai mulți utilizatori.";

    out.policy_whatwetell = "Ce le spunem altora despre tine";
    out.policy_whatwetell_p1 = "Nu furnizăm informațiile obținute terților, decât dacă ne este cerut n mod legal.";
    out.policy_links = "Link-uri către alte site-uri";
    out.policy_links_p1 = "Acest site conține link-uri către alte site-uri, incluzându-le pe cele produse de alte organizații. Nu suntem responsabili pentru practicile de intimitate sau pentru conținutul site-urilor externe. Ca regulă generală, link-urile către site-uri externe sunt deschise ntr-o fereastră noup, pentru a face clar faptul că părăsiți CryptPad.fr.";
    out.policy_ads = "Reclame";
    out.policy_ads_p1 = "Nu afișăm nici o formă de publicitate online, dar s-ar putea să atașăm link-uri către instituțiile care ne finanțează cerecetarea.";
    out.policy_choices = "Ce alegeri ai";
    out.policy_choices_open = "Codul nostru este open source, așa că tu ai mereu posibilitatea de a-ți găzdui propria instanță de CryptPad.";
    out.policy_choices_vpn = "Dacă vrei să folosești instanța găzduită de noi, dar nu vrei să ți expui IP-ul, poți să l protejezi folosind <a href=\"https://www.torproject.org/projects/torbrowser.html.en\" title=\"downloads from the Tor project\" target=\"_blank\" rel=\"noopener noreferrer\">Tor browser bundle</a>, sau <a href=\"https://riseup.net/en/vpn\" title=\"VPNs provided by Riseup\" target=\"_blank\" rel=\"noopener noreferrer\">VPN</a>.";
    out.policy_choices_ads = "Dacă vrei doar să blochezi platforma noastră de analiză, poți folosi soluții de adblocking ca <a href=\"https://www.eff.org/privacybadger\" title=\"download privacy badger\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy Badger</a>.";
    out.tos_title = "CryptPad Termeni de Utilizare";
    out.tos_legal = "Te rugăm să nu fii rău intenționat, abuziv, sau să faci orice ilegal.";
    out.tos_availability = "Sperăm că o să găsești acest serviciu util, dar disponibilitatea sau performanța nu poate fi garantată. Te rugăm să ți exporți datele n mod regulat.";
    out.tos_e2ee = "Conținutul CryptPad poate fi citit sau modificat de oricine care poate ghici sau obține fragmentul identificator al pad-ului. Recomandăm să folosești soluții de comunicare criptate end-to-end-encrypted (e2ee) pentru a partaja link-uri, evitând orice risc n cazul unei scurgeri de informații.";
    out.tos_logs = "Metadatele oferite de browser-ul tău serverului ar putea fi nscrise n scopul de a menține serviciul.";
    out.tos_3rdparties = "Nu oferim date personale terților, decât dacă ne sunt solicitate prin lege.";
    out.bottom_france = "<a href=\"http://www.xwiki.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Realizat cu <img class=\"bottom-bar-heart\" src=\"/customize/heart.png\" alt=\"love\" /> n <img class=\"bottom-bar-fr\" src=\"/customize/fr.png\" alt=\"Franța\" /></a>";
    out.bottom_support = "<a href=\"http://labs.xwiki.com/\" title=\"XWiki Labs\" target=\"_blank\" rel=\"noopener noreferrer\">Un proiect al <img src=\"/customize/logo-xwiki2.png\" alt=\"XWiki SAS\" class=\"bottom-bar-xwiki\"/> Labs Project </a> cu susținerea <a href=\"http://ng.open-paas.org/\" title=\"OpenPaaS::ng\" target=\"_blank\" rel=\"noopener noreferrer\"> <img src=\"/customize/openpaasng.png\" alt=\"OpenPaaS-ng\" class=\"bottom-bar-openpaas\" /></a>";
    out.header_france = "<a href=\"http://www.xwiki.com/\" target=\"_blank\" rel=\"noopener noreferrer\">With <img class=\"bottom-bar-heart\" src=\"/customize/heart.png\" alt=\"love\" /> from <img class=\"bottom-bar-fr\" src=\"/customize/fr.png\" title=\"Franța\" alt=\"Franța\"/> by <img src=\"/customize/logo-xwiki.png\" alt=\"XWiki SAS\" class=\"bottom-bar-xwiki\"/></a>";
    out.header_support = "<a href=\"http://ng.open-paas.org/\" title=\"OpenPaaS::ng\" target=\"_blank\" rel=\"noopener noreferrer\"> <img src=\"/customize/openpaasng.png\" alt=\"OpenPaaS-ng\" class=\"bottom-bar-openpaas\" /></a>";
    out.header_logoTitle = "Mergi la pagina principală";
    out.initialState = "<span style=\"font-size:16px;\"><p>Acesta este&nbsp;<strong>CryptPad</strong>, editorul colaborativ bazat pe tehnologia Zero Knowledge n timp real. Totul este salvat pe măsură ce scrii.<br>Partajează link-ul către acest pad pentru a edita cu prieteni sau folosește <span style=\"background-color:#5cb85c;color:#ffffff;\">&nbsp;Share&nbsp;</span> butonul pentru a partaja <em>read-only link</em>&nbsp;permițând vizualizarea dar nu și editarea.</p><p><span style=\"color:#808080;\"><em>Îndrăznește, ncepe să scrii...</em></span></p></span><p>&nbsp;<br></p>";
    out.codeInitialState = "/*\n   Acesta este editorul colaborativ de cod bazat pe tehnologia Zero Knowledge CryptPad.\n   Ce scrii aici este criptat, așa că doar oamenii care au link-ul pot să-l acceseze.\n   Poți să alegi ce limbaj de programare pus n evidență și schema de culori UI n dreapta sus.\n*/";
    out.slideInitialState = "# CryptSlide\n* Acesta este un editor colaborativ bazat pe tehnologia Zero Knowledge.\n* Ce scrii aici este criptat, așa că doar oamenii care au link-ul pot să-l acceseze.\n* Nici măcar serverele nu au acces la ce scrii tu.\n* Ce vezi aici, ce auzi aici, atunci când pleci, lasă aici.\n\n-\n# Cum se folosește\n1. Scrie-ți conținutul slide-urilor folosind sintaxa markdown\n  - Află mai multe despre sintaxa markdown [aici](http://www.markdowntutorial.com/)\n2. Separă-ți slide-urile cu -\n3. Click pe butonul \"Play\" pentru a vedea rezultatele  - Slide-urile tale sunt actualizate n timp real.";
    out.driveReadmeTitle = "Ce este CryptDrive?";
    out.readme_welcome = "Bine ai venit n CryptPad !";
    out.readme_p1 = "Bine ai venit n CryptPad, acesta este locul unde ți poți lua notițe, singur sau cu prietenii.";
    out.readme_p2 = "Acest pad o să ți ofere un scurt ghid n cum poți să folosești CryptPad pentru a lua notițe, a le ține organizate și a colabora pe ele.";
    out.readme_cat1 = "Descoperă-ți CryptDrive-ul";
    out.readme_cat1_l1 = "Crează un pad: În CryptDrive-ul tău, dă click {0} apoi {1} și poți să creezi un pad.";
    out.readme_cat1_l2 = "Deschide pad-urile din CryptDrive-ul tău: doublu-click pe iconița unui pad pentru a-l deschide.";
    out.readme_cat1_l3 = "Organizează-ți pad-urile: Când ești logat, orice pad accesezi va fi afișat ca n secțiunea {0} a drive-ului tău.";
    out.readme_cat1_l3_l1 = "Poți să folosești funcția click and drag pentru a muta fișierele n folderele secțiunii {0} a drive-ului tău și pentru a crea noi foldere.";
    out.readme_cat1_l3_l2 = "Ține minte să ncerci click-dreapta pe iconițe pentru că există și meniuri adiționale.";
    out.readme_cat1_l4 = "Pune pad-urile vechi n gunoi. Poți să folosești funcția click and drag pe pad-uri n categoria {0} la fel ca și n cazul folderelor.";
    out.readme_cat2 = "Crează pad-uri ca un profesionist";
    out.edit = "editează";
    out.view = "vezi";
    out.readme_cat2_l1 = "Butonul {0} din pad-ul tău dă accesul colaboratorilor tăi să {1} sau să {2} pad-ul.";
    out.readme_cat2_l2 = "Schimbă titlul pad-ului dând click pe creion";
    out.readme_cat3 = "Descoperă aplicațiile CryptPad";
    out.readme_cat3_l1 = "Cu editorul de cod CryptPad, poți colabora pe cod ca Javascript și markdown ca HTML și Markdown";
    out.readme_cat3_l2 = "Cu editorul de slide-uri CryptPad, poți să faci prezentări scurte folosind Markdown";
    out.readme_cat3_l3 = "Cu CryptPoll poți să organizezi votări rapide, mai ales pentru a programa ntâlniri care se potrivesc calendarelor tuturor";

    out.tips = { };
    out.tips.lag = "Iconița verde din dreapta-sus arată calitatea conexiunii internetului tău la serverele CryptPad.";
    out.tips.shortcuts = "`ctrl+b`, `ctrl+i` and `ctrl+u` sunt scurtături pentru bold, italic și underline.";
    out.tips.indentare = "În listele cu bulină sau cele numerotate, poți folosi  tab sau shift+tab pentru a mări sau micșora indentarea.";
    out.tips.titlu = "Poți seta titlul pad-urilor tale prin click pe centru sus.";
    out.tips.stocare = "De fiecare dată când vizitezi un pad, dacă ești logat va fi salvat pe CryptDrive-ul tău.";
    out.tips.marker = "Poți sublinia text ntr-un pad folosind itemul \"marker\" n meniul de stiluri.";

    out.feedback_about = "Dacă citești asta, probabil că ești curios de ce CryptPad cere pagini web atunci când ntreprinzi anumite acțiuni";
    out.feedback_privacy = "Ne pasă de intimitatea ta, si n același timp vrem să păstrăm CryptPad ușor de folosit.  Folosim acest fișier pentru a ne da seama care beneficii UI contează cel mai mult pentru utilizatori, cerându-l alături de un parametru specific atunci când acțiunea se desfășoară";
    out.feedback_optout = "Dacă vrei să ieși, vizitează <a href='/settings/'>setările de pe pagina ta de user</a>, unde vei găsi o căsuță pentru a activa sau dezactiva feedback-ul de la user";

    return out;
});