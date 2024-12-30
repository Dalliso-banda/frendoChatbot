alert('i am a simple chat bot designed to give information about Frendo, please observer punctuations at all times')
  const userProf ={
      Msg:document.querySelector('input'),
      body: document.querySelector('div'),
      form:document.querySelector('form'),
      sendBtn: document.querySelector('i'),
      botRes:[
           // English
"Hello",
"Hi",
"Hey",
"tsup",
"how are you?"
,
"how are you",
"hi there",
"Hello there",
"Hey there",
"Hi everyone",
"Hello everyone",
"Good morning",
"Good afternoon!",
"Good evening!",
"Good day!",
"Long time no see!",
"It's great to see you!",
"It's nice to meet you!",
"Welcome!",
"Salutations!",
"Greetings!",
"Hello friend!",
"Hey friend!",
"Hi friend!",
"Good to see you!",
"Nice to see you!",
"Great to see you!",

// French
"Bonjour!",
"Salut",
"Bonsoir!",
"Bon matin!",
"Bonne journée!",
"Bonne soirée!",
"Bonjour à tous!",
"Salut à tous!",
"Enchanté!",
"Bienvenue!",
"Réunion!",
"Bon retour!",
"À bientôt!",
"Au revoir!",
"À plus tard!",
"Bonne chance!",
"Bon courage!",

// Spanish
"hola!",
"buenos días!",
"mulibwanji ",
"como estas ",
"ati how",
"hasta luego!",
"hasta pronto!",
"adiós!",
"chau!",
"hasta mañana!",

// Chinese (Simplified)
"你好！", 
"早上好！" ,
"下午好！",
"晚上好！" ,
"大家好！" ,
"很高兴见到你",
"欢迎！" ,
"再见！" ,
"明天见！" ,

// Chinese (Traditional)
"你好！" ,
"早上好！",
"下午好！",
"晚上好！" ,
"大家好！" ,
"很高興見到你！",
"歡迎！" ,
"再見！" ,
"明天見！",
],
byeTxt:[
    "bye",
     "see you",
     "bye bye"
],

frendoDef:[
"Who are you?",
"Who's Frendo?",
"Who is Frendo, exactly?",
"Who is Frendo, really?",
"Who is Frendo, anyway?",
"Can you tell me who Frendo is?",
"Could you tell me who Frendo is?",
"Who might Frendo be?",
"Who is Frendo, if I may ask?",
"Would you mind telling me who Frendo is?",
"Could you please tell me who Frendo is?",
"Who is Frendo, may I ask?",
"Who is Frendo, pray tell?",
"Who is Frendo, sir/ma'am?",
"Who is Frendo, friend?",
"Who is Frendo, stranger?",
"Who is this Frendo?",
"Who is Frendo on earth?",
],

location:[
 "Where does Frendo live?", 
 "In which city does Frendo reside?", 
    "What's Frendo's current address?", 
  "Where can Frendo be found?", 
     "What's Frendo's place of residence?",
   "Where does Frendo hang their hat?",
    "In what location does Frendo dwell?",  "What's Frendo's hometown?", 
    "Where does Frendo live these days?", "What's Frendo's current location?"
    ],

      userMsg: (event)=>{
      userProf.body.scrollTop = userProf.body.scrollHeight;
      let userInput = userProf.Msg.value;
         event.preventDefault();
         // console.log(userInput)
         let msgValue= userProf.Msg.value.toLowerCase();
          let span = document.createElement('p');
        let txt=  userProf.body.appendChild(span);
       
       let bodTxt=[];
       
       bodTxt.push(userInput.toLowerCase())
        txt.innerHTML= bodTxt;
         
       if(userProf.botRes.includes(msgValue.trim())){
       
      let span = document.createElement('p');
        let botTxt=  userProf.body.appendChild(span);                
        botTxt.innerHTML=`hello how are you? Am Frendos assistant please ask questions about frendo `;
        span.style.background='red';
        span.style.marginLeft='10%';
   
             
       } 
       else if(userProf.frendoDef.includes(userInput.trim())) {
       event.preventDefault()
      
        let span = document.createElement('p');
        let botTxt=  userProf.body.appendChild(span);                
        botTxt.innerHTML='frendo is an african software developer and innovator.he is 18 years old,and currently working on several projects';
        span.style.background='red';
        span.style.marginLeft='10%';
       }
       else       if(userProf.location.includes(userInput)){
           let span = document.createElement('p');
           
        let botTxt=  userProf.body.appendChild(span);                
        botTxt.innerHTML= 'Frendo lives in lusaka,zambia in a komboni named kabanana'
        span.style.background= 'red';
        span.style.marginLeft='10%'
        
        }
        else 
        if(userProf.byeTxt.includes(userInput.trim().toLowerCase())){
     let   byeRes=[
     "bye 😀😄 hoping to see you again soon call 0976557875 muyende bwino",
     'muyende bwino',
     "hopping to see you",
     "fi ma kalebwangu bechi pondo"
     ]
            let span = document.createElement('p');
        let botTxt=  userProf.body.appendChild(span);                
      
        botTxt.innerHTML= byeRes[Math.floor(Math.random()*byeRes.length)];
        span.style.background='red';
        span.style.marginLeft='60%'
        }
        else if(userInput==""){
            alert ('cannot send empty message ')
            userProf.form.submit()=false
        }
        else{
            let span = document.createElement('p');
        let botTxt=  userProf.body.appendChild(span);                
        botTxt.innerHTML= 'sorry please rephrase the question and please note am not an AI model so am dumb and can only answer questions according to my program ';
        span.style.background='red';
        span.style.marginLeft='10%';
        }
       
       
       userProf.Msg.value=""
        
      }
      
      
      
      
     
  }
 
  userProf.  form.addEventListener('submit',userProf.userMsg)
  
