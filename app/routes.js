//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// CATEGORY BRANCHING //

// Run this code when a form is submitted to 'report-category-answer'
router.post('/report-category-answer', function (req, res) {

    // Make a variable and give it the value from 'report-category'
    var whatDoYouWantToReport = req.session.data['report-category']
  
    // Check whether the variable matches a condition
    if (whatDoYouWantToReport == "An MOT test, tester or garage"){
      // Send user to next page
      res.redirect('MOT/garage-involved')
    } else if (whatDoYouWantToReport == "An illegal driving instructor"){
      // Send user to next page
      res.redirect('/driving-instructor/driving-instructor-details')
    } else if (whatDoYouWantToReport == "Fraudulent activity within a theory or practical driving test"){
    // Send user to next page
    res.redirect('/driving-test/business-involved')
    } else if (whatDoYouWantToReport == "A lorry, bus or coach driver or business"){
      // Send user to next page
      res.redirect('/lorry-van/business-involved')
    } else if (whatDoYouWantToReport == "A van or Light Goods Vehicle driver or business"){
    // Send user to next page
    res.redirect('/lorry-van/business-involved')
    } else if (whatDoYouWantToReport == "Someone making or selling illegal vehicles or parts"){
      // Send user to next page
      res.redirect('/making-selling-illegal-vehicles-or-parts/business-involved')
    }
  }
)

// MOT ROUTES //

// Run this code when a form is submitted to 'MOT-garage-involved'
router.post('/MOT-garage-involved', function (req, res) {

  // Make a variable and give it the value from 'is-garage-involved'
  var IsGarageInvolved = req.session.data['is-garage-involved']

  // Check whether the variable matches a condition
  if (IsGarageInvolved == "Yes"){
    // Send user to next page
    res.redirect('MOT/garage-details')
  } else if (IsGarageInvolved == "No"){
    // Send user to next page
    res.redirect('MOT/person-involved')
  }
}
)

// Run this code when a form is submitted to 'MOT-person-involved'
router.post('/MOT-person-involved', function (req, res) {

  // Make a variable and give it the value from 'MOT-person-involved'
  var MOTPersonInvolved = req.session.data['MOT-person-involved']

  // Check whether the variable matches a condition
  if (MOTPersonInvolved == "Yes"){
    // Send user to next page
    res.redirect('MOT/person-details')
  } else if (MOTPersonInvolved == "No"){
    // Send user to next page
    res.redirect('MOT/test-involved')
  }
}
)

// Run this code when a form is submitted to 'MOT-test-involved'
router.post('/MOT-test-involved', function (req, res) {

  // Make a variable and give it the value from 'MOT-test-involved'
  var MOTTestInvolved = req.session.data['MOT-test-involved']

  // Check whether the variable matches a condition
  if (MOTTestInvolved == "Yes"){
    // Send user to next page
    res.redirect('MOT/test-details')
  } else if (MOTTestInvolved == "No"){
    // Send user to next page
    res.redirect('MOT/why-contacting-us')
  }
}
)

// Run this code when a form is submitted to 'MOT-date-time-involved'
router.post('/MOT-date-time-involved', function (req, res) {

  // Make a variable and give it the value from 'date-time-involved'
  var MOTDateTimeInvolved = req.session.data['MOT-date-time-involved']

  // Check whether the variable matches a condition
  if (MOTDateTimeInvolved == "Yes"){
    // Send user to next page
    res.redirect('MOT/date-time-details')
  } else if (MOTDateTimeInvolved == "No"){
    // Send user to next page
    res.redirect('MOT/would-you-like-to-provide-contact-details')
  }
}
)

// Run this code when a form is submitted to 'would-you-like-to-provide-contact-details'
router.post('/MOT-provide-contact-details', function (req, res) {

  // Make a variable and give it the value from 'would-you-like-to-provide-contact-details'
  var ContactDetails = req.session.data['MOT-provide-contact-details']

  // Check whether the variable matches a condition
  if (ContactDetails == "yes"){
    // Send user to next page
    res.redirect('MOT/contact-details')
  } else if (ContactDetails == "no"){
    // Send user to next page
    res.redirect('MOT/check-answers')
  }
}
)



// DRIVING INSTRUCTOR ROUTES //

// Run this code when a form is submitted to 'is-driving-school-involved'
router.post('/is-driving-school-involved', function (req, res) {

  // Make a variable and give it the value from 'is-driving-school-involved'
  var DrivingSchool = req.session.data['is-driving-school-involved']

  // Check whether the variable matches a condition
  if (DrivingSchool == "Yes"){
    // Send user to next page
    res.redirect('/driving-instructor/driving-school-details')
  } else if (DrivingSchool == "No"){
    // Send user to next page
    res.redirect('/driving-instructor/vehicle-involved')
  }
}
)

// Run this code when a form is submitted to 'is-vehicle-involved'
router.post('/is-vehicle-involved', function (req, res) {

  // Make a variable and give it the value from 'is-vehicle-involved'
  var VehicleInvolved = req.session.data['is-vehicle-involved']

  // Check whether the variable matches a condition
  if (VehicleInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-instructor/vehicle-details')
  } else if (VehicleInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-instructor/any-payments')
  }
}
)

// Run this code when a form is submitted to '/were-payments-made'
router.post('/were-payments-made', function (req, res) {

  // Make a variable and give it the value from 'were-payments-made'
  var PaymentMade = req.session.data['were-payments-made']

  // Check whether the variable matches a condition
  if (PaymentMade == "Yes"){
    // Send user to next page
    res.redirect('/driving-instructor/how-were-payments-made')
  } else if (PaymentMade == "No"){
    // Send user to next page
    res.redirect('/driving-instructor/why-contacting-us')
  }
}
)

// Run this code when a form is submitted to '/location-involved-question'
router.post('/location-involved-DI', function (req, res) {

  // Make a variable and give it the value from 'were-payments-made'
  var DILocation = req.session.data['location-involved-DI']

  // Check whether the variable matches a condition
  if (DILocation == "Yes"){
    // Send user to next page
    res.redirect('/driving-instructor/incident-location')
  } else if (DILocation == "No"){
    // Send user to next page
    res.redirect('/driving-instructor/date-time-involved')
  }
}
)

// Run this code when a form is submitted to 'date-time-involved'
router.post('/DI-date-time-involved-question', function (req, res) {

  // Make a variable and give it the value from 'date-time-involved'
  var DIDateTimeInvolved = req.session.data['DI-date-time-involved-question']

  // Check whether the variable matches a condition
  if (DIDateTimeInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-instructor/date-time-details')
  } else if (DIDateTimeInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-instructor/would-you-like-to-provide-contact-details')
  }
}
)

// Run this code when a form is submitted to 'would-you-like-to-provide-contact-details'
router.post('/DI-provide-contact-details', function (req, res) {

  // Make a variable and give it the value from 'would-you-like-to-provide-contact-details'
  var DIContactDetails = req.session.data['DI-provide-contact-details']

  // Check whether the variable matches a condition
  if (DIContactDetails == "yes"){
    // Send user to next page
    res.redirect('/driving-instructor/contact-details')
  } else if (DIContactDetails == "no"){
    // Send user to next page
    res.redirect('/driving-instructor/check-answers')
  }
}
)



// DRIVING TEST ROUTES //

// Run this code when a form is submitted to '/DT-business-involved'
router.post('/DT-business-involved', function (req, res) {

  // Make a variable and give it the value from 'is-business-involved'
  var DTBusinessInvolved = req.session.data['DT-business-involved']

  // Check whether the variable matches a condition
  if (DTBusinessInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-test/business-details')
  } else if (DTBusinessInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-test/person-involved')
  }
}
)


// Run this code when a form is submitted to '/driving-test-is-person-involved'
router.post('/DT-person-involved', function (req, res) {

  // Make a variable and give it the value from 'driving-test-is-person-involved'
  var DrivingTestPersonInvolved = req.session.data['DT-person-involved']

  // Check whether the variable matches a condition
  if (DrivingTestPersonInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-test/person-details')
  } else if (DrivingTestPersonInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-test/vehicle-involved')
  }
}
)

// Run this code when a form is submitted to '/is-second-person-involved'
router.post('/DT-second-person-involved', function (req, res) {

  // Make a variable and give it the value from 'is-second-person-involved'
  var SecondPersonInvolved = req.session.data['DT-second-person-involved']

  // Check whether the variable matches a condition
  if (SecondPersonInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-test/second-person-details')
  } else if (SecondPersonInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-test/vehicle-involved')
  }
}
)

// Run this code when a form is submitted to '/vehicle-involved-driving-test'
router.post('/vehicle-involved-driving-test', function (req, res) {

  // Make a variable and give it the value from 'is-second-person-involved'
  var DrivingTestVehicleInvolved = req.session.data['vehicle-involved-driving-test']

  // Check whether the variable matches a condition
  if (DrivingTestVehicleInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-test/vehicle-details')
  } else if (DrivingTestVehicleInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-test/why-contacting-us')
  }
}
)

// Run this code when a form is submitted to '/location-involved-question'
router.post('/DT-location-involved-question', function (req, res) {

  // Make a variable and give it the value from 'were-payments-made'
  var DTLocation = req.session.data['DT-location-involved-question']

  // Check whether the variable matches a condition
  if (DTLocation == "Yes"){
    // Send user to next page
    res.redirect('/driving-test/incident-location')
  } else if (DTLocation == "No"){
    // Send user to next page
    res.redirect('/driving-test/date-time-involved')
  }
}
)

// Run this code when a form is submitted to 'date-time-involved'
router.post('/DT-date-time-involved-question', function (req, res) {

  // Make a variable and give it the value from 'date-time-involved'
  var DTDateTimeInvolved = req.session.data['DT-date-time-involved-question']

  // Check whether the variable matches a condition
  if (DTDateTimeInvolved == "Yes"){
    // Send user to next page
    res.redirect('/driving-test/date-time-details')
  } else if (DTDateTimeInvolved == "No"){
    // Send user to next page
    res.redirect('/driving-test/would-you-like-to-provide-contact-details')
  }
}
)

// Run this code when a form is submitted to 'would-you-like-to-provide-contact-details'
router.post('/DT-provide-contact-details', function (req, res) {

  // Make a variable and give it the value from 'would-you-like-to-provide-contact-details'
  var DTContactDetails = req.session.data['DT-provide-contact-details']

  // Check whether the variable matches a condition
  if (DTContactDetails == "yes"){
    // Send user to next page
    res.redirect('/driving-test/contact-details')
  } else if (DTContactDetails == "no"){
    // Send user to next page
    res.redirect('/driving-test/check-answers')
  }
}
)


// LORRY/BUS/VAN ROUTES //


// Run this code when a form is submitted to '/is-driver-involved'
router.post('/is-driver-involved', function (req, res) {

  // Make a variable and give it the value from 'is-driver-involved'
  var DriverInvolved = req.session.data['is-driver-involved']

  // Check whether the variable matches a condition
  if (DriverInvolved == "Yes"){
    // Send user to next page
    res.redirect('/lorry-van/driver-details')
  } else if (DriverInvolved == "No"){
    // Send user to next page
    res.redirect('/lorry-van/vehicle-involved')
  }
}
)

// Run this code when a form is submitted to '/is-lorry-van-business-involved'
router.post('/is-lorry-van-business-involved', function (req, res) {

  // Make a variable and give it the value from 'is-lorry-van-business-involved'
  var LorryVanBusinessInvolved = req.session.data['is-lorry-van-business-involved']

  // Check whether the variable matches a condition
  if (LorryVanBusinessInvolved == "Yes"){
    // Send user to next page
    res.redirect('/lorry-van/business-details')
  } else if (LorryVanBusinessInvolved == "No"){
    // Send user to next page
    res.redirect('/lorry-van/driver-involved')
  }
}
)

// Run this code when a form is submitted to '/vehicle-involved-lorry-van'
router.post('/vehicle-involved-lorry-van', function (req, res) {

  // Make a variable and give it the value from 'vehicle-involved-lorry-van'
  var LorryVanVehicleInvolved = req.session.data['vehicle-involved-lorry-van']

  // Check whether the variable matches a condition
  if (LorryVanVehicleInvolved == "Yes"){
    // Send user to next page
    res.redirect('/lorry-van/vehicle-details')
  } else if (LorryVanVehicleInvolved == "No"){
    // Send user to next page
    res.redirect('/lorry-van/why-contacting-us')
  }
}
)

// Run this code when a form is submitted to '/location-involved-question'
router.post('/LV-location-involved-question', function (req, res) {

  // Make a variable and give it the value from 'were-payments-made'
  var LVLocation = req.session.data['LV-location-involved-question']

  // Check whether the variable matches a condition
  if (LVLocation == "Yes"){
    // Send user to next page
    res.redirect('/lorry-van/incident-location')
  } else if (LVLocation == "No"){
    // Send user to next page
    res.redirect('/lorry-van/date-time-involved')
  }
}
)

// Run this code when a form is submitted to 'date-time-involved'
router.post('/LV-date-time-involved-question', function (req, res) {

  // Make a variable and give it the value from 'date-time-involved'
  var LVDateTimeInvolved = req.session.data['LV-date-time-involved-question']

  // Check whether the variable matches a condition
  if (LVDateTimeInvolved == "Yes"){
    // Send user to next page
    res.redirect('/lorry-van/date-time-details')
  } else if (LVDateTimeInvolved == "No"){
    // Send user to next page
    res.redirect('/lorry-van/would-you-like-to-provide-contact-details')
  }
}
)

// Run this code when a form is submitted to 'would-you-like-to-provide-contact-details'
router.post('/LV-provide-contact-details', function (req, res) {

  // Make a variable and give it the value from 'would-you-like-to-provide-contact-details'
  var LVContactDetails = req.session.data['LV-provide-contact-details']

  // Check whether the variable matches a condition
  if (LVContactDetails == "yes"){
    // Send user to next page
    res.redirect('/lorry-van/contact-details')
  } else if (LVContactDetails == "no"){
    // Send user to next page
    res.redirect('/lorry-van/check-answers')
  }
}
)




// MAKING/SELLING ROUTES //


// Run this code when a form is submitted to Making & selling '/business-involved'
router.post('/is-a-business-involved', function (req, res) {

  // Make a variable and give it the value from 'business-involved'
  var IsBusinessInvolved = req.session.data['is-a-business-involved']

  // Check whether the variable matches a condition
  if (IsBusinessInvolved == "Yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/business-details')
  } else if (IsBusinessInvolved == "No"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/person-involved')
  }
}
)

// Run this code when a form is submitted to Making & selling '/is-person-involved'
router.post('/is-person-involved', function (req, res) {

  // Make a variable and give it the value from 'is-person-involved'
  var PersonInvolved = req.session.data['is-person-involved']

  // Check whether the variable matches a condition
  if (PersonInvolved == "Yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/person-details')
  } else if (PersonInvolved == "No"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/are-they-selling-from-an-address')
  }
}
)

// Run this code when a form is submitted to Making & selling '/selling-from-address'
router.post('/selling-from-address', function (req, res) {

  // Make a variable and give it the value from 'selling-from-address'
  var SellingFromAddress = req.session.data['selling-from-address']

  // Check whether the variable matches a condition
  if (SellingFromAddress == "Yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/what-address')
  } else if (SellingFromAddress == "No"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/are-they-selling-online')
  } else if (SellingFromAddress == "I don't know"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/are-they-selling-online')
  }
}
)

// Run this code when a form is submitted to Making & selling '/selling-online'
router.post('/selling-online', function (req, res) {

  // Make a variable and give it the value from 'selling-online'
  var SellingOnline = req.session.data['selling-online']

  // Check whether the variable matches a condition
  if (SellingOnline == "Yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/where-online')
  } else if (SellingOnline == "No"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/vehicle-part-or-service')
  } else if (SellingOnline == "I don't know"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/vehicle-part-or-service')
  }
}
)

// Run this code when a form is submitted to Making & selling '/selling-online'
router.post('/new-question', function (req, res) {

  // Make a variable and give it the value from 'selling-online'
  var New = req.session.data['new-question']

  // Check whether the variable matches a condition
  if (New == "Yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/business-involved')
  } else if (New == "No"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/continue')
  }
}
)

// Run this code when a form is submitted to Making & selling '/selling-online'
router.post('/continue-question', function (req, res) {

  // Make a variable and give it the value from 'selling-online'
  var Continue = req.session.data['continue-question']

  // Check whether the variable matches a condition
  if (Continue == "Yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/business-involved')
  } else if (Continue == "No"){
    // Send user to next page
    res.redirect('')
  }
}
)

// Run this code when a form is submitted to 'would-you-like-to-provide-contact-details'
router.post('/MSU-provide-contact-details', function (req, res) {

  // Make a variable and give it the value from 'would-you-like-to-provide-contact-details'
  var MSUContactDetails = req.session.data['MSU-provide-contact-details']

  // Check whether the variable matches a condition
  if (MSUContactDetails == "yes"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/contact-details')
  } else if (MSUContactDetails == "no"){
    // Send user to next page
    res.redirect('/making-selling-illegal-vehicles-or-parts/check-answers')
  }
}
)