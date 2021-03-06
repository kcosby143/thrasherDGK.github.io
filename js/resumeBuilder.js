var bio = {
  firstName: 'Igor',
  lastName: 'Ladkin',
  role: 'Web Developer',
  birthDate: 'Nov 24, 1988',
  contacts: {
    mobile: '8-911-557-5678',
    email: 'dgkplan@googlemail.com',
    skype: 'thrasherDGK',
    github: 'thrasherDGK',
    location: 'Arkhangelsk, Russia'
  },
  avatar: 'images/avatar.png',
  aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fuga ut voluptates inventore similique veniam, iste sint! ' +
           'Aspernatur harum possimus dolore deleniti fuga fugit amet quidem dolores eum quos libero consequatur quaerat, eaque nesciunt ' +
           'exercitationem eveniet, velit ea doloribus autem ipsum nisi delectus explicabo quas! Reiciendis itaque suscipit, ea reprehenderit.' +
           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus amet doloremque ex voluptates ut laudantium esse, nam ipsa. ' +
           'Dolor magnam quam voluptate, minima maxime. Blanditiis sint magni, praesentium, facere iste totam maiores natus, adipisci, nobis ' +
           'culpa temporibus alias voluptatum repellendus voluptas! Quibusdam veniam, consequuntur reiciendis nihil quo iusto ipsum inventore.',
  skills: [['Ruby on Rails', 0.8], ['JavaScript', 0.65], ['HTML and CSS', 0.55], ['Board Riding', 0.4]],
  languages: [['Russian', 100], ['English', 80]],
  hobbies :['Travelling', 'Crossfit', 'Surfing', 'Snowboarding'],

  display: function() {
    var age = function() {
      var birthDate = new Date(bio.birthDate), 
      currentDate   = new Date();

      var getMonthDate = function(dateObject) {
        return parseInt([dateObject.getMonth(), dateObject.getDate()].join(''));
      };
      
      var age,
      birthMonthDay   = getMonthDate(birthDate),
      birthYear       = birthDate.getYear(),
      currentMonthDay = getMonthDate(currentDate),
      currentYear     = currentDate.getYear();

      age = currentMonthDay >= birthMonthDay ? currentYear - birthYear : currentYear - birthYear - 1; 

      return age;
    }(), 
    formatAboutMe = function() {
      var aboutMeSection = $('#about'),
      formattedAboutMe   = HTMLaboutMe.replace('%data%', bio.aboutMe);

      aboutMeSection.append(formattedAboutMe);

      return [formattedAboutMe];
    }(),
    formatHeader = function() {
      var headerSection = $('#photo-header'),
      formattedPhoto    = HTMLheaderPhoto.replace('%data%', bio.avatar),
      formattedGreeting = HTMLheaderGreeting.replace('%data%', bio.firstName).replace('%age%', age + 'YO').replace('%role%', bio.role);

      headerSection.append(formattedPhoto).append(formattedGreeting);

      return [formattedPhoto, formattedGreeting];
    }(),
    formatContacts = function() {
      var contacts          = bio.contacts,
      contactSection        = $('#contacts'),
      formattedContactError = '<p>There are no avaliable contacts.</p>', 
      formattedContactIcon,
      formattedContactTitle,
      formattedContactDescription;

      if (contacts && Object.keys(contacts).length > 0) {
        for (var key in contacts) {
          contactSection.append(HTMLcontactItem);

          formattedContactIcon        = HTMLcontactIcon.replace('%data%', key);
          formattedContactTitle       = HTMLcontactTitle.replace('%data%', key.toUpperCase());
          formattedContactDescription = HTMLcontactDescription.replace('%data%', bio.contacts[key]);

          $('.contact-item:last').append(formattedContactIcon).append(formattedContactTitle).
                                  append(formattedContactDescription);
        }

        return [formattedContactIcon, formattedContactTitle, formattedContactDescription];
      } else {
        contactSection.append(formattedContactError);
        contactSection.hide();

        return formattedContactError;
      }
    }(),
    formatSkills = function() {
      $('#skills').append(HTMLskillHeader);

      var skills          = bio.skills,
      skillSection        = $('.skills:last'),
      formattedSkillError = '<p>There are no interesting skills.</p>',
      formattedSkillItem;

      if (skills && skills.length > 0) {
        for (var i in skills) {
          formattedSkillItem = HTMLskillItem.replace('%data%', skills[i][0]).replace('%value%', skills[i][1]).
                                             replace('%style%', (458 * skills[i][1]).toFixed(1));
          
          skillSection.append(formattedSkillItem);
        }
        skillSection.append(HTMLskillFooter);

        return formattedSkillItem;
      } else {
        skillSection.append(formattedSkillError);
        $('#skills').hide();

        return formattedSkillError;
      }
    }(),
    formatLanguages = function() {
      $('#languages').append(HTMLlanguageHeader);

      var languages          = bio.languages,
      languageSection        = $('#language-skills'),
      formattedLanguageError = '<p>There are no well known languages.</p>',
      formattedLanguageItem,
      formattedLanguageRating;

      if (languages && languages.length > 0) {
        for (var i in languages) {
          formattedLanguageItem   = HTMLlanguageItem.replace('%data%', languages[i][0]);
          formattedLanguageRating = HTMLlanguageRating.replace('%value%', languages[i][1]).replace('%rating%', languages[i][1]);

          languageSection.append(formattedLanguageItem);
          $('.skill:last').append(formattedLanguageRating);
        }

        return [formattedLanguageItem, formattedLanguageRating];
      } else {
        languageSection.append(formattedLanguageError);
        $('#languages').hide();

        return formattedLanguageError;
      }
    }(),
    formatHobbies = function() {
      var hobbies         = bio.hobbies,
      hobbySection        = $('#hobbies'),
      formattedHobbyError = '<p>There are no hobbies at all.</p>',
      formattedHobbyItem;

      if (hobbies && hobbies.length > 0) {
        for (var i in hobbies) {
          formattedHobbyItem = HTMLhobbyItem.replace('%data%', hobbies[i]);

          hobbySection.append(formattedHobbyItem);
        }
        return [formattedHobbyItem];
      } else {
        hobbySection.append(formattedHobbyError);
        hobbySection.hide();

        return formattedHobbyError;
      }
    }();
  }
};

var education = {
  schools: [
    {
      school: 'Northern Arctic Federal University',
      date: '2011',
      location: 'Arkhangelsk, Russia',
      majors: ['Applied Mathematics'],
      degree: 'Specialist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore.'
    },
    {
      school: 'Centre for Development of Advanced Computing',
      date: '2014',
      location: 'Delhi, India',
      majors: ['Web Development with .NET'],
      degree: 'Certificate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore.'
    }
  ],
  onlineCourses: [
    {
      title: 'CS169.1x Engineering Software as a Service',
      school: 'BerkeleyX',
      date: '2014',
      location: 'Berkeley, CA, USA',
      url: 'https://s3.amazonaws.com/verify.edx.org/downloads/6ed98ac9c1ac40d3be71aed4dafda704/Certificate.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore.'
    },
    {
      title: 'CS169.2x Engineering Software as a Service, Part 2',
      school: 'BerkeleyX',
      date: '2014',
      location: 'Berkeley, CA, USA',
      url: 'https://s3.amazonaws.com/verify.edx.org/downloads/3fcdb6b46fb84ab69c5b8d74a057e72f/Certificate.pdf',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore.'
    }
  ],

  display: function() {
    var formatEducation = function() {
      var schools             = education.schools,
      courses                 = education.onlineCourses,
      educationSection        = $('#education'),
      formattedEducationError = '<p>There are no spectific information about education.</p>',
      formattedEducationItem,
      educationItemUrl;

      if ((schools && schools.length > 0) || (courses && courses.length > 0)) {
         educationSection.append(HTMLeducationHeader);
         educationSection = $('#education-list');

        if (schools && schools.length > 0) {
          for (var i in schools) {
            formattedEducationItem = HTMLeducationItem.replace('%date%', schools[i].date).replace('%data%', schools[i].school + 
                                     '. ' + schools[i].majors[0]).replace('%description%', schools[i].description);
            educationSection.append(formattedEducationItem);
          }
        }
        if (courses && courses.length > 0) {
          for (var i in courses) {
            educationItemUrl       = HTMLeducationItemURL.replace('%url%', courses[i].url).replace('%data%', courses[i].school + '. ' + courses[i].title);
            formattedEducationItem = HTMLeducationItem.replace('%date%', courses[i].date).replace('%data%', educationItemUrl).replace('%description%', courses[i].description);
            educationSection.append(formattedEducationItem);
          }
        }

        return [formattedEducationItem];
      } else {
        educationSection.append(formattedEducationError);
        educationSection.hide();

        return formattedEducationError;
      } 
    }();
  }
};

var work = {
  jobs: [
    {
      employer: 'Casting Agency',
      profession: 'Crowd Scenes Actor',
      location: 'Los-Angeles, CA',
      dates: 'June, 2010 - August, 2010',
      description: 'Crowd scenes actor in different tv shows and music videos. ' + 
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita ad voluptate suscipit nostrum? ' +
      'Eum recusandae praesentium, beatae accusamus repudiandae corporis qui autem adipisci nobis. ' +
      'Accusamus quo error repudiandae blanditiis ducimus inventore a, ' +
      'fugit cupiditate doloribus odio similique sequi deserunt, magnam explicabo quam illo quidem est? ' +
      'Nemo delectus aliquid assumenda.'
    },
    {
      employer: 'City Hall',
      profession: 'System Administrator',
      location: 'Arkhangelsk, Russia',
      dates: 'November, 2012 - August, 2013',
      description: 'Administration of local domain network, maintaining local web services and servers. ' + 
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita ad voluptate suscipit nostrum? ' +
      'Eum recusandae praesentium, beatae accusamus repudiandae corporis qui autem adipisci nobis. ' +
      'Accusamus quo error repudiandae blanditiis ducimus inventore a, ' +
      'fugit cupiditate doloribus odio similique sequi deserunt, magnam explicabo quam illo quidem est? ' +
      'Nemo delectus aliquid assumenda.'
    },
    {
      employer: 'City Hall',
      profession: 'System Administrator / Web Developer',
      location: 'Arkhangelsk, Russia',
      dates: 'August, 2013 - Present Time',
      description: 'Administration of local domain network, maintaining local web services and servers. ' + 
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita ad voluptate suscipit nostrum? ' +
      'Eum recusandae praesentium, beatae accusamus repudiandae corporis qui autem adipisci nobis. ' +
      'Accusamus quo error repudiandae blanditiis ducimus inventore a, ' +
      'fugit cupiditate doloribus odio similique sequi deserunt, magnam explicabo quam illo quidem est? ' +
      'Nemo delectus aliquid assumenda.'
    }
  ],

  display: function() {
    var formatWork = function() {
      var jobs    = work.jobs,
      workSection = $('#work'),
      formattedWorkError = '<p>No previous experience.</p>',
      formattedWorkItem;

      if (jobs && jobs.length > 0) {
        for (var i in jobs) {
          formattedWorkItem = HTMLworkItem.replace('%employer%', jobs[i].employer).replace('%dates%', jobs[i].dates).
                                           replace('%profession%', jobs[i].profession).replace('%description%', jobs[i].description);

          workSection.append(formattedWorkItem);
        }

        return [formattedWorkItem];
      } else {
        workSection.append(formattedWorkError);
        workSection.hide();

        return formattedWorkError;
      }
    }();
  } 
};

var portfolio = {
  projects: [
    {
      name: 'Ruby Warrior',
      date: 'October, 2014',
      url: '#',
      title: 'Personal Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, officiis ea. Velit officia nobis aliquam asperiores, ' +
                   'voluptatem facilis molestiae ea possimus provident voluptatibus deserunt consequatur iure, nostrum alias, minima, sed!',
      screenshots: [
        {
          source: 'images/1.png',
          alter: 'screenshot'
        },
        {
          source: 'images/2.png',
          alter: 'screenshot'
        },
        {
          source: 'images/3.png',
          alter: 'screenshot'
        }
      ]
    },
    {
      name: 'Ruby Warrior 2',
      date: 'November, 2014',
      url: '#',
      title: 'Improved Personal Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, officiis ea. Velit officia nobis aliquam asperiores, ' +
                   'voluptatem facilis molestiae ea possimus provident voluptatibus deserunt consequatur iure, nostrum alias, minima, sed!',
      screenshots: [
        {
          source: 'http://placehold.it/1280x720/F0563D',
          alter: 'screenshot'
        },
        {
          source: 'http://placehold.it/1280x720/A75265',
          alter: 'screenshot'
        },
        {
          source: 'http://placehold.it/1280x720/E8117F',
          alter: 'screenshot'
        }
      ]
    }
  ],

  display: function() {
    var formatPortfolio = function() {
      var projects          = portfolio.projects,
      portfolioSection      = $('#portfolio'),
      modalSection          = $('body'),
      formattedProjectError = '<p>There are no finished projects yet.</p>',
      formattedProjectItem,
      formattedProjectImage,
      formattedModalHeader,
      formattedModalItem;

      var imgIndex = 0;

      if (projects && projects.length > 0) {
        for (var i in projects) {
          portfolioSection.append(HTMLprojectHeader);

          var image, project   = projects[i],
          formattedProjectItem = HTMLprojectItem.replace('%url%', project.url).replace('%name%', project.name).replace('%date%', project.date).
                                 replace('%title%', project.title).replace('%description%', project.description),
          formattedModalHeader = HTMLmodalHeader.replace('%index%', i).replace('%project%', project.name).replace('%carousel%', i).replace('%left%', i).replace('%right%', i);

          $('.project:last').append(formattedProjectItem);
          modalSection.append(formattedModalHeader);

          if (project.screenshots.length > 0) {
            for (var j in project.screenshots) {
              image = project.screenshots[j];

              formattedProjectImage = HTMLprojectImage.replace('%index%', imgIndex).replace('%number%', i).replace('%source%', image.source).replace('%alter%', image.alter);
              $('.screenshots:last').append(formattedProjectImage);

              imgIndex += 1;

              formattedModalItem = HTMLmodalItem.replace('%source%', image.source).replace('%alter%', image.alter);
              $('.carousel-inner:last').append(formattedModalItem);
            }
          }
        }

        return [formattedProjectItem];
      } else {
        portfolioSection.append(formattedProjectError);
        portfolioSection.hide();

        return formattedProjectError;
      }
    }();
  }
};

var map = {
  initialize: function() {

    var map, locations, 
    mapOptions = {
      zoomControl: true,
      disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    locationFinder = function() {
      var locations = [];
      locations.push(bio.contacts.location);

      for (var i in education.schools) {
        locations.push(education.schools[i].location);
      }

      for (var i in work.jobs) {
        locations.push(work.jobs[i].location);
      }

      return locations;
    };

    createMapMarker = function(placeData) {
      // The next lines save location data from the search result object to local variables
      var lat    = placeData.geometry.location.k,  // latitude from the place service
          lon    = placeData.geometry.location.B,  // longitude from the place service
          name   = placeData.formatted_address,    // name of the place from the place service
          bounds = window.mapBounds;               // current boundaries of the map window

      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: map,
        position: placeData.geometry.location,
        title: name
      });
      
      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      map.fitBounds(bounds);
      // center the map
      map.setCenter(bounds.getCenter());
    };

    callback = function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0])
      }
    };

    pinPoster = function(locations) {

      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(map);
      
      // Iterates through the array of locations, creates a search object for each location
      for (place in locations) {

        // the search request object
        var request = {
          query: locations[place]
        }

        // Actually searches the Google Maps API for location data and runs the callback 
        // function with the search results after each search.
        service.textSearch(request, callback);
      }
    };

    window.mapBounds = new google.maps.LatLngBounds();
    locations = locationFinder();
    pinPoster(locations);
    window.addEventListener('resize', function(e) {
      // Make sure the map bounds get updated on page resize
      map.fitBounds(mapBounds);
    });

    var minZoomLevel = 1,
        maxZoomLevel = 6,
        minLatValue  = 49.5,
        currentLatValue;

    var allowedBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-49.5, -180),
                                                     new google.maps.LatLng(49.5, 180));

    // Change map bound depending on zoom level
    var changeBounds = function(zoomValue) {
      var calculateLat = function(zoomLevel) {
        currentLatValue = minLatValue;

        for (var i = 0; i < zoomLevel; i++) {
          currentLatValue += 20 * (zoomLevel - 1) / Math.pow(2, zoomLevel - 1);  
        }
        
        return currentLatValue;
      };

      return new google.maps.LatLngBounds(new google.maps.LatLng(-calculateLat(zoomValue - 1), -180),
                                          new google.maps.LatLng(calculateLat(zoomValue - 1), 180));  
    };

    // Check if map center belongs to defined bounds
    var checkCenter = function() {
      if(allowedBounds.contains(map.getCenter())) {
        return;
      }
      var mapCenter = map.getCenter();
      var X = mapCenter.lng(),
          Y = mapCenter.lat();

      var AmaxX = allowedBounds.getNorthEast().lng(),
          AmaxY = allowedBounds.getNorthEast().lat(),
          AminX = allowedBounds.getSouthWest().lng(),
          AminY = allowedBounds.getSouthWest().lat();

      if (Y < AminY) { Y = AminY; }
      if (Y > AmaxY) { Y = AmaxY; }
   
       map.setCenter(new google.maps.LatLng(Y,X));
    };

    // Limit zoom level
    google.maps.event.addListener(map, 'zoom_changed', function () {
      if (map.getZoom() < minZoomLevel) {
        map.setZoom(minZoomLevel);
      }
      else if (map.getZoom() > maxZoomLevel) {
        map.setZoom(maxZoomLevel);
      }

      allowedBounds = changeBounds(map.getZoom());
      checkCenter();
    });

    google.maps.event.addListener(map, 'center_changed', function() {
      checkCenter();  
    });  
  },

  display: function() {
    window.addEventListener('load', map.initialize);
    
    $('#mapDiv').append(HTMLgoogleMap);
  } 
};

bio.display();
education.display();
work.display();
portfolio.display();
map.display();