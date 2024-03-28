<div dir="rtl">

## מרים פשקוס/ עבודת בית להדסים


בתרגיל מספר 1 מימשתי שרת ב nodejs עם מסד נתונים של mongodb .מכיוון ששניהם היו חדשים בשבילי ובגלל אילוצי זמן מימשתי רק חלק מצד הלקוח. (את בדיקות תקינות הקלט מימשתי בשרת אך לא בצד הלקוח)

כחלק מהמימוש נעזרתי בכמה מאמרים שמצאתי בגוגל, והעיקרי מבינהם: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

---

## התחלה של השרת

כדי להתחיל את השרת יש להריץ את הפקודות הבאות מה CMD:
1.  https://github.com/MiriamZeidman/Miriam-Pashkus-s-home-task.git -git clone
2. cd Miriam-Pashkus-s-home-task\ex1
3. npm install
4. npm run start

נא לשים לב שהחיבור למונגו נמצא בקובץ .env ויש לשנות לפי המונגו שאליו מתחברים

---


##  ******המשמעות של כל API:******

### **users**:

post= הכנס לקוח חדש

get/id= קבל נתוני לקוח לפי id

get/= קבל את נתוני כל הלקוחות

patch= עדכן נתוני לקוח קיים

delete= מחק לקוח קיים


### **vaccine details:**

post= הכנס נתוני חיסון ללקוח

get= קבל נתוני חיסון של לקוח

patch= עדכן נתוני חיסון של לקוח

delete= מחק נתוני חיסון של לקוח קיים





---

קישורים לאוספים של post-man- :כאן בדיקות תקינות הקלט כן מופיעות. (כדי להשתמש בהם- כנסו ל-post-man, לחצו על import והעתיקו לשם את הקישור הרלוונטי) 

 https://api.postman.com/collections/33742828-f96da5b3-068a-4da0-ae33-38d6a328fc39?access_key=PMAT-01HT0NHNZ65VMJB9JW53FSY7TJ -users

 https://api.postman.com/collections/33742828-4ebb803f-3bac-4556-9f90-4f3fb6c48e6f?access_key=PMAT-01HSZG3RN9NTEN0RXVRHTCR47D -coronaVaccine


</div>
