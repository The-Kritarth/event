
const popUp = document.querySelectorAll(".click-me");

popUp.forEach (p =>
    {
        p.addEventListener("click",function(e)
        {
            switch (this.id)
            {
                case "pop1" : 
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Codentwined.png");
                            document.querySelector(".popAbout").textContent="Got bored of regular coding events? We bring to you \"CodeEntwined\" a unique coding event with double the fun. Not so interesting? If the question itself has a question! Remember the order matters! Make your way through the problems and code them out.The time is running out, Hurry up!";
                            document.querySelector(".popHead").textContent="Condentwined";
                            document.querySelector(".linkBtn").textContent="Dive in";
                            break; 
                case "pop2" :
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Hawkeyed.png"); 
                            document.querySelector(".popAbout").textContent="Here's we are up with a most engaging and unique coding event.Sometimes it works, sometimes it fails but keep going to break the loop of test cases failed.Think big, Think fast, Think wider, Think deeper because the challenge is not so easy.Your miracle could be just around the corner.";
                            document.querySelector(".popHead").textContent="Hawkeyed";
                            document.querySelector(".linkBtn").textContent="Dive in";

                            break;
                case "pop3" : 
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Logic.png");
                            document.querySelector(".popAbout").textContent="It's time to test your digital logic skills. How fast can you make your way through the circuits and reach the desired output? Remember, Hit and trial is not a part! There is only one chance and only one answer. So be fast and set your bits right!";
                            document.querySelector(".popHead").textContent="Logic Gates MAze";
                            document.querySelector(".linkBtn").textContent="Dive in";
                            break;
                case "pop4" : 
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Arcanum.png");
                            document.querySelector(".popAbout").textContent="Take a deep dive into this thrilling present-day crime story where a database holds the key to every answer you seek.Play in teams of two (Sherlock always needs his Watson!) and write SQL queries to discover clues that will take you closer to the truth.Can you find your way through the web of lies and deception to unravel the true story?";
                            document.querySelector(".popHead").textContent="Arcanum"; 
                            document.querySelector(".linkBtn").textContent="Dive in";           
                            break;
                case "pop5" : 
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Cyber.png");
                            document.querySelector(".popAbout").textContent="Adventure awaits you,take your team on a journey you'll will go because the ride isnt easy.  The \"Cyber Quest\" takes you on a cryptic, interactive journey into the secret nooks and crannies.To land on an unerring pathway deal with the challenges on the way. Browse around not like everyday.The final lock will not have 1 key , but 5 keys.The game is on until you decode. To make your day get your team work done!";
                            document.querySelector(".popHead").textContent="Cyber Quest";  
                            document.querySelector(".linkBtn").textContent="Login";           
                            break;
                case "pop6" :
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Creative.png"); 
                            document.querySelector(".popAbout").textContent="Sharpen your sharpening skills, light up your lightning skills, because you are being tested for your creative skills. We give you a picture and you give life to the picture. Show up your wild mind and disciplined eye as you are open to your imagination. You will not be judged for your labor but for your vision. Remember \"A picture is a poem without words\"";
                            document.querySelector(".popHead").textContent="Call Yourself Creative?";
                            document.querySelector(".linkBtn").textContent="Submit";             
                            break;
                case "pop7" : 
                            document.querySelector(".popImg").setAttribute("src","./assets/pop/Shoot.png");
                            document.querySelector(".popAbout").textContent='Put your reaction time and accuracy to the test in the minute-long game — "Shoot At Sight".Choose from a collection of weapons and crosshairs to give your best shot at becoming the "Aim God".Play as many times as you want within 24 hours and try to beat other players\' scores as well as your own personal best.And keep a close eye on the leaderboard. It\'s not about reaching the top, it\'s about staying there!';
                            document.querySelector(".popHead").textContent="Shoot At Sight"; 
                            document.querySelector(".linkBtn").textContent="Login";           
                            break;
            }
        });
    });
document.querySelector(".popClose").addEventListener("click",function()
{
    document.querySelector(".popImg").setAttribute("src","");
    document.querySelector(".popAbout").textContent='';
    document.querySelector(".popHead").textContent=""; 
    document.querySelector(".linkBtn").textContent="";
});
