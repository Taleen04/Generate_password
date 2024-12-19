function pass(){
    const getRandomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];
    const generatePassword = (length, charset) => {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += getRandomChar(charset);
          }
        return password;
      };
       generateWeeklyPassword = () => generatePassword(6, "abcd");

       generateMediumPassword = () => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return generatePassword(8, charset);
       }

         generateStrongPassword = () => 
            generatePassword(12, "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*");
   
      const generatePasswords = () => {
        const weeklyPasswords = Array.from({ length: 5 }, generateWeeklyPassword);
        const mediumPasswords = Array.from({ length: 5 }, generateMediumPassword);
        const strongPasswords = Array.from({ length: 5 }, generateStrongPassword);
    
        console.log("Weekly Passwords:", weeklyPasswords);
        console.log("Medium Passwords:", mediumPasswords);
        console.log("Strong Passwords:", strongPasswords);

        return { weeklyPasswords, mediumPasswords, strongPasswords };
      };

      const managePasswords = () => {
        const intervalId = setInterval(() => {
          console.clear();
          generatePasswords();
        }, 1000); 

        setTimeout(() => {
          clearInterval(intervalId);
          console.clear();
          console.log("All passwords cleared.");
          managePasswords(); // Restart the process
        }, 3000); 
      };
    // generateWeeklyPassword();
    // generateMediumPassword();
    // generateStrongPassword();
   
    managePasswords();
 
//console.log("Weekly Passwords:");
//managePasswords();
}
pass();