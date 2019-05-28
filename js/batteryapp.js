window.onload = function() {

            function updateBatteryStatus(battery) {
                document.querySelector('#charging').textContent = battery.charging ? 'CHARGING STATUS : PLUGGED IN' : 'CHARGING STATUS : NOT PLUGGED IN';

                document.querySelector('#level').textContent = "BATTERY LEVEL IS : " + Math.floor(battery.level * 100) + "%";
                

                document.querySelector('#dischargingTime').textContent = "ESTIMATED BATTERY TIME : " + Math.floor(battery.dischargingTime / 3600) + " hrs";
                if (battery.level >= 0.81){
                    document.getElementById("bar0").style.background="green";
                    document.getElementById("bar1").style.background="green";
                    document.getElementById("bar2").style.background="green";
                    document.getElementById("bar3").style.background="green";
                    document.getElementById("bar4").style.background="green";
                    document.getElementById("bar5").style.background="green";
                    
                }else if (battery.level >= 0.61){
                    document.getElementById("bar0").style.background="white";
                    document.getElementById("bar1").style.background="white";
                    document.getElementById("bar2").style.background="green";
                    document.getElementById("bar3").style.background="green";
                    document.getElementById("bar4").style.background="green";
                    document.getElementById("bar5").style.background="green";
                    
                }else if (battery.level >= 0.41){
                    document.getElementById("bar0").style.background="white";
                    document.getElementById("bar1").style.background="white";
                    document.getElementById("bar2").style.background="white";
                    document.getElementById("bar3").style.background="yellow";
                    document.getElementById("bar4").style.background="yellow";
                    document.getElementById("bar5").style.background="yellow";
                    
                }else if (battery.level >= 0.21){
                    document.getElementById("bar0").style.background="white";
                    document.getElementById("bar1").style.background="white";
                    document.getElementById("bar2").style.background="white";
                    document.getElementById("bar3").style.background="white";
                    document.getElementById("bar4").style.background="yellow";
                    document.getElementById("bar5").style.background="yellow";
                    
                }else if (battery.level >= 0.11){
                    document.getElementById("bar0").style.background="white";
                    document.getElementById("bar1").style.background="white";
                    document.getElementById("bar2").style.background="white";
                    document.getElementById("bar3").style.background="white";
                    document.getElementById("bar4").style.background="white";
                    document.getElementById("bar5").style.background="red";
                    
                }
                else if (battery.level >= 0.01){
                    document.getElementById("bar0").style.background="white";
                    document.getElementById("bar1").style.background="white";
                    document.getElementById("bar2").style.background="white";
                    document.getElementById("bar3").style.background="white";
                    document.getElementById("bar4").style.background="white";
                    document.getElementById("bar5").style.background="red";
                    
                }
            }

            navigator.getBattery().then(function(battery) {
                // Update the battery status initially when the promise resolves ...
                updateBatteryStatus(battery);

                // .. and for any subsequent updates.
                battery.onchargingchange = function() {
                    updateBatteryStatus(battery);
                };

                battery.onlevelchange = function() {
                    updateBatteryStatus(battery);
                };

                battery.ondischargingtimechange = function() {
                    updateBatteryStatus(battery);
                };
            });
        };