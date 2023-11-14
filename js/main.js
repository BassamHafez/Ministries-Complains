let sideBar = document.getElementById("sideBar");
let barIcon = document.getElementById("barIcon");
let optionSelect = document.getElementById('option-select');
let categorySelect = document.getElementById('category-select');
let subcategorySelect = document.getElementById('subcategory-select');
let complaintFirstSlide = document.getElementById('complaintFirstSlide');
let complaintSecondtSlide = document.getElementById('complaintSecondtSlide');
let nextComplaint = document.getElementById('next-choose-mini');
let prevComplaint = document.getElementById('prev-choose-mini');
let sideBarOpacityValue = '0';





barIcon.addEventListener('click', function() {
    sideBarOpacityValue = getComputedStyle(sideBar).opacity;
    toggleSideBar(sideBarOpacityValue);
});

function toggleSideBar(sideBarOpacityValue) {
    if (sideBarOpacityValue === '0') {
        sideBar.style.cssText = "left: 0; opacity: 1";
    } else {
        sideBar.style.cssText = "left: -150%; opacity: 0";
    }
}


optionSelect.addEventListener('change', function() {
  
  categorySelect.innerHTML = '<option class="header-option" value="">Select</option>';
  subcategorySelect.innerHTML = '<option class="header-option" value="">Select</option>';


  const selectedOption = optionSelect.value;

  switch (selectedOption) {

    case 'Environment':
      addCategoryOption('نقص المياه في منطقة محددة أو مدينة');
      addCategoryOption('التلوث في نهر أو منطقة ساحلية');
      addCategoryOption('إلقاء النفايات بشكل غير قانوني في منطقة محمية');
      addCategoryOption('عدم توفر أنظمة الري المناسبة للأراضي الزراعية')
      break;

    case 'Municipal':
      addCategoryOption('خدمات إدارة النفايات غير كافية في حي معين');
      addCategoryOption('سوء الصيانة في الحدائق والمتنزهات العامة');
      addCategoryOption('تأخر في إصدار تصاريح البناء للممتلكات السكنية');
      addCategoryOption('نقص الإنارة العامة المناسبة في منطقة محددة');
      break;

    case 'Interior':
      addCategoryOption('قلق بشأن الأمن في حي محدد');
      addCategoryOption('مشكلات ازدحام المرور في مدينة معينة أو منطقة');
      addCategoryOption('التلوث الصوتي من المنشآت المجاورة');
      addCategoryOption('تأخر في استجابة المكالمات أو الشكاوى الطارئة');
      break;

    case 'Health':
      addCategoryOption('خدمات الرعاية الصحية غير كافية في منطقة معينة');
      addCategoryOption('انتظار طويل لمواعيد الزيارات الطبية أو العمليات الجراحية');
      addCategoryOption('نقص النظافة في المستشفيات العامة أو العيادات');
      addCategoryOption('عدم توفر الأدوية الأساسية بشكل كافٍ');
      break;

    case 'Foreign':
      addCategoryOption('تأخر في تجديد جواز السفر أو إصداره');
      addCategoryOption('مشكلات تتعلق بتقديم طلبات التأشيرة أو معالجتها');
      addCategoryOption('مشاكل تواجه المواطنين السعوديين في الخارج');
      addCategoryOption('نقص الدعم القنصلي في بلد أو منطقة محددة');
      break;
    case 'tourism':
      addCategoryOption('ضعف البنية التحتية والمرافق في أماكن الجذب السياحي');
      addCategoryOption('نقص مراكز المعلومات السياحية أو المرشدين السياحيين');
      addCategoryOption('مخاوف بشأن سلامة السياح في مناطق معينة');
      addCategoryOption('عدم الترويج الكافي لوجهات السياحة المحلية');
      break;

      default:
      break;
  }

  
});


function addCategoryOption(category) {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
}

categorySelect.addEventListener('change', function() {

    subcategorySelect.innerHTML = '<option class="header-option" value="">Select</option>';

    const selectedCategory = categorySelect.value;

    switch (selectedCategory) {
      case 'نقص المياه في منطقة محددة أو مدينة':
        addSubcategoryOption('عدم كفاية إمدادات المياه للأغراض الزراعية');
        addSubcategoryOption('عدم كفاية فرص الحصول على مياه الشرب النظيفة في المناطق الريفية');
        addSubcategoryOption('ظروف الجفاف التي تؤثر على المجتمعات الزراعية');
        break;
      case 'التلوث في نهر أو منطقة ساحلية':
        addSubcategoryOption('التلوث الصناعي الذي يؤثر على مصادر المياه المحلية');
        addSubcategoryOption('تلوث المياه الجوفية بسبب التخلص غير السليم من النفايات');
        addSubcategoryOption('تلوث الهواء الناتج عن المصانع يؤثر على المناطق السكنية القريبة');
        break;
      case 'إلقاء النفايات بشكل غير قانوني في منطقة محمية':
        addSubcategoryOption('النفايات الناجمة من المصانع');
        addSubcategoryOption('إلقاء نفايات من قبل السكان المحليين');
        addSubcategoryOption('عدم تواجد عمال النظافة في المنطقة');
        break;
      case 'عدم توفر أنظمة الري المناسبة للأراضي الزراعية':
        addSubcategoryOption('عطل في ماكينات الري الرئيسية');
        addSubcategoryOption('الاستخدام غير الفعال للموارد المائية في الممارسات الزراعية');
        break;

      case 'سوء الصيانة في الحدائق والمتنزهات العامة':
        addSubcategoryOption('مساحات خضراء مهملة أو سيئة الصيانة');
        addSubcategoryOption('عدم كفاية المرافق الترفيهية للأطفال والعائلات');
        addSubcategoryOption('عدم كفاية إضاءة الحديقة والتدابير الأمنية');
        break;  
      case 'خدمات إدارة النفايات غير كافية في حي معين':
        addSubcategoryOption('خدمات جمع القمامة والتخلص منها بشكل غير منتظم');
        addSubcategoryOption('رمي النفايات والرمي غير القانوني في الأماكن العامة');
        addSubcategoryOption('نقص مرافق إعادة التدوير وبرامج التوعية');
        break;
      case 'تأخر في إصدار تصاريح البناء للممتلكات السكنية':
        addSubcategoryOption('ظروف السكن السيئة ونقص المرافق الأساسية');
        addSubcategoryOption('تحديات الحصول على قروض الإسكان والرهون العقارية');
        addSubcategoryOption('ارتفاع أسعار الإيجارات وخيارات السكن المحدودة بأسعار معقولة');
        break;
      case 'نقص الإنارة العامة المناسبة في منطقة محددة':
        addSubcategoryOption('عدم تواجد عمال الصيانة الدورية');
        addSubcategoryOption('انقطاع الكهرباء بشكل مستمر');
        addSubcategoryOption('حدوث عمليات سرقة أو إتلاف لأعمدة الإنارة');
        break;
      case 'مشكلات ازدحام المرور في مدينة معينة أو منطقة':
        addSubcategoryOption('عدم كفاية البنية التحتية للطرق والازدحام');
        addSubcategoryOption('عدم وجود مراقبة فعالة وإنفاذ حركة المرور');
        addSubcategoryOption('عدم كفاية مواقف السيارات والإشارات المرورية');
        break;
      case 'التلوث الصوتي من المنشآت المجاورة':
        addSubcategoryOption('تواجد أماكن غير قانونية للحفلات');
        addSubcategoryOption('صدور ضوضاء من سكان الحي');
        addSubcategoryOption('صدور ضوضاء من المصانع المجاورة');
        break;
      case 'قلق بشأن الأمن في حي محدد':
        addSubcategoryOption('ارتفاع معدلات الجريمة والمخاوف بشأن السلامة الشخصية');
        addSubcategoryOption('عدم كفاية تواجد الشرطة وأوقات الاستجابة');
        addSubcategoryOption('مشاكل مع أنظمة المراقبة العامة والتدابير الأمنية');
        break;
      case 'تأخر في استجابة المكالمات أو الشكاوى الطارئة':
        addSubcategoryOption('تأخر استجابة سيارات الإسعاف أو رجال الإطفاء أثناء حالات الطوارئ');
        addSubcategoryOption('مشاكل في الخط الساخن للطوارئ أو أنظمة الاتصالات');
        addSubcategoryOption('عدم كفاية الاستعداد والاستجابة للكوارث الطبيعية');
        break;
      case 'خدمات الرعاية الصحية غير كافية في منطقة معينة':
        addSubcategoryOption('اكتظاظ المستشفيات وفترات الانتظار الطويلة لتلقي العلاج');
        addSubcategoryOption('نقص المتخصصين المؤهلين في مجال الرعاية الصحية');
        addSubcategoryOption('عدم كفاية الخدمات الطبية المتخصصة');
        break;
      case 'انتظار طويل لمواعيد الزيارات الطبية أو العمليات الجراحية':
        addSubcategoryOption('عدم المتابعة المستمرة من الطاقم الطبي');
        addSubcategoryOption('اكتظاظ المستشفي وبطئ الطاقم الطبي');
        addSubcategoryOption('عدم تواجد الطاقم الطبي في أوقات العمل الرسمية');
        break;
      case 'نقص النظافة في المستشفيات العامة أو العيادات':
        addSubcategoryOption('انعدام النظافة والنظافة في مرافق الرعاية الصحية حالات الأخطاء الطبية والإهمال');
        addSubcategoryOption('عدم كفاية تعليم المريض ورعاية المتابعة');
        break;
      case 'عدم توفر الأدوية الأساسية بشكل كافٍ':
        addSubcategoryOption('عدم صرف الأدوية الكافية للمريض');
        addSubcategoryOption('غياب الموظفين القائمين علي صرف الأدوية');
        addSubcategoryOption('إعطاء الأدوية لغير المستحقين');
        break;
      case 'تأخر في تجديد جواز السفر أو إصداره':
        addSubcategoryOption('معالجة غير فعالة للوثائق والتأخير في الخدمات القنصلية');
        addSubcategoryOption('التحديات التي يواجهها المواطنون السعوديون في الحصول على تأشيرات لبعض الدول');
        break;
      case 'مشكلات تتعلق بتقديم طلبات التأشيرة أو معالجتها':
        addSubcategoryOption('تأخر في عمليات معالجة وطلب التأشيرات');
        addSubcategoryOption('تحديات العودة إلى الوطن أو مساعدة المواطنين الذين يواجهون الأزمات أو حالات الطوارئ');
        addSubcategoryOption('الصعوبات التي يواجهها المواطنون في الحصول على التمثيل القانوني والمعاملة العادلة');
        break;
      case 'مشاكل تواجه المواطنين السعوديين في الخارج':
        addSubcategoryOption('عدم كفاية الدعم القنصلي أثناء حالات الطوارئ أو القضايا القانونية');
        addSubcategoryOption('قلة المساعدة للمواطنين المنكوبين في الخارج');
        addSubcategoryOption('حالات انتهاكات حقوق الإنسان ضد المواطنين السعوديين في الخارج');
        break;
      case 'نقص الدعم القنصلي في بلد أو منطقة محددة':
        addSubcategoryOption('القضايا المتعلقة بالصراعات الدبلوماسية أو العلاقات الدولية المتوترة');
        addSubcategoryOption('عدم كفاية تعزيز التبادل الثقافي والتعاون الدولي');
        break;
      case 'ضعف البنية التحتية والمرافق في أماكن الجذب السياحي':
        addSubcategoryOption('عدم توفر المرافق العامة مثل دورات المياه ومراكز الزوار');
        addSubcategoryOption('عدم كفاية خدمات النقل للسياح في المناطق النائية');
        addSubcategoryOption('عدم كفاية خيارات الإقامة في الوجهات السياحية الشهيرة');
        break;
      case 'نقص مراكز المعلومات السياحية أو المرشدين السياحيين':
        addSubcategoryOption('عدم كفاية المرشدين');
        addSubcategoryOption('عدم كفاية المعلومات الصحية');
        addSubcategoryOption('التقاعص عن أداء العمل في أوقات العمل الرسمية');
        break;
      case 'مخاوف بشأن سلامة السياح في مناطق معينة':
        addSubcategoryOption('بلاغات عن عمليات احتيال أو سرقة سياحية في بعض المناطق السياحية');
        addSubcategoryOption('مخاوف بشأن سلامة وأمن السياح، وخاصة النساء والأسر');
        addSubcategoryOption('عدم كفاية خدمات الطوارئ ووجود الشرطة السياحية');
        break;
      case 'عدم الترويج الكافي لوجهات السياحة المحلية':
        addSubcategoryOption('محدودية الترويج الدولي للوجهات السياحية السعودية');
        addSubcategoryOption('عدم كفاية مراكز المعلومات السياحية والأدلة متعددة اللغات');
        addSubcategoryOption('تحديات جذب السياح الأجانب وتنويع القطاع السياحي');
        break;

    default:
        break;
    }
  });


  function addSubcategoryOption(subcategory) {
    const option = document.createElement('option');
    option.value = subcategory;
    option.textContent = subcategory;
    subcategorySelect.appendChild(option);
  }


  nextComplaint.addEventListener('click',function(){
    complaintFirstSlide.style.display='none';
    complaintSecondtSlide.style.display='block';
  });

  prevComplaint.addEventListener('click',function(){
    complaintFirstSlide.style.display='block';
    complaintSecondtSlide.style.display='none';
  });

  





  
