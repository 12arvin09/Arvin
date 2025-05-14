let slideIndex=1;
            showSlide(slideIndex);
            
            // Next and Previous Control which changes the indes number of slideIndes
            function plusSlide(n){
                showSlide(slideIndex=slideIndex+n);
            }

            function currentSlide(n){
                showSlide(slideIndex=n);
            }

            function showSlide(n){
                let i=0; 
                let slides = document.getElementsByClassName('gallery'); // its becoming slides array
                let dots = document.getElementsByClassName('dot'); // its becoming dot array

                if ( n > slides.length) {slideIndex=1}
                if ( n < 1) {slideIndex=slides.length-1}

                for (i=0; i < slides.length; i++){
                    slides[i].style.display = "none";
                    
                }

                for (i=0; i < dots.length; i++){
                    dots[i].className = dots[i].className.replace(" active", "");
                }

                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className = dots[slideIndex-1].className + " active";
            }
