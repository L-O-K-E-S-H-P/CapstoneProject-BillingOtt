import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
 
  images=[{name:'family.png',caption:'Mr.Cool'},{name:'family.png',caption:'Mr.Cool'},{name:'enter.png',caption:'Mr.Cool'}]
  
 
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }

  currentTheme: string = 'auto'; // Initialize with a default theme

  ngOnInit() {
    // Initialize the current theme based on user preferences or default values
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.currentTheme = storedTheme;
    }
    this.applyTheme(this.currentTheme);
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme); // Store the theme preference in local storage
    this.applyTheme(theme);
  }

  applyTheme(theme: string) {
    if (theme === 'light') {
      // Apply light theme styles
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
      // Apply dark theme styles
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      // Apply auto theme (based on system preference)
      document.body.classList.remove('light-theme', 'dark-theme');
    }
  }

  

}
