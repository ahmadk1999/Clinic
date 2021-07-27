using Clinic.Data;
using Clinic.Models;
using ClinicProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Clinic.Controllers
{
    public class patientSignupController : Controller
    {
        private readonly ApplicationDbContext _db;
        public patientSignupController(ApplicationDbContext _context)
        {
            _db = _context;


        }

        public IActionResult Index(String search)
        {
            List<Patient> listspec = _db.Patients.ToList();
            listspec = _db.Patients.Where(x => x.FirstName == search || search == null).ToList();
            return View(listspec);
            IEnumerable<Patient> objList = _db.Patients;
            return View(objList);
        }
        public async Task<IActionResult> CreateAsync()
        {
            ViewData["CountryModel"] = new SelectList(await this.GetCountry(), "name", "name");
            return View();
        }

        // POST: Specializations/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create( Patient patient)
        {
            
            {
                _db.Patients.Add(patient);
                await _db.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
           
        }
        public IActionResult Details(int? id)
        {
            var patient = _db.Patients.FirstOrDefault(s => s.patientId == id);
            if (patient == null)
            {
                return NotFound();
            }
            return View(patient);
        }
        public IActionResult Edit(int id)
        {

            var patient = _db.Patients.Find(id);
            return View(patient);
        }
        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult Edit(Patient patient)
        {
            _db.Patients.Update(patient);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var patient = await _db.Patients
                .FirstOrDefaultAsync(m => m.patientId == id);
            if (patient == null)
            {
                return NotFound();
            }

            return View(patient);
        }
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int? id)
        {
            var patient = await _db.Patients.FindAsync(id);
            _db.Patients.Remove(patient);
            await _db.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        public async Task<IEnumerable<CountryModel>> GetCountry()
        {
            string url = "https://restcountries.eu/rest/v1/all";
            List<CountryModel> country = new List<CountryModel>();
            // Web Request with the given url.
            WebRequest request = WebRequest.Create(url);
            request.Credentials = CredentialCache.DefaultCredentials;

            WebResponse response = request.GetResponse();

            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string jsonResponse = null;

            // Store the json response into jsonResponse variable.
            jsonResponse = reader.ReadLine();

            if (jsonResponse != null)
            {
                // Deserialize the jsonRespose object to the CountryModel. You're getting a JSON array [].
                List<CountryModel> countryModel = Newtonsoft.Json.JsonConvert.DeserializeObject<List<CountryModel>>(jsonResponse);

                // Set the List Item with the countries.
                IEnumerable<SelectListItem> countries = countryModel.Select(x => new SelectListItem() { Value = x.name, Text = x.name });

                // Create a ViewBag property with the final content.
                ViewBag.Countries = countries;
            }
            return country;
        }
        }
}

