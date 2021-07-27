using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Clinic.Data;
using Clinic.Models;
using System.Net;
using ClinicProject.Models;
using System.IO;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Net.Http;

namespace Clinic.Controllers
{
    public class DoctorSignupController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DoctorSignupController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Doctors
        public async Task<IActionResult> Index(String search)
        {
            
            var applicationDbContext = _context.Doctors.Include(d => d.Specialization);
            List<Doctor> listspec = _context.Doctors.ToList();
            listspec = _context.Doctors.Where(x => x.FirstName == search || search == null).ToList();
           
            //return View(listspec);
            
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Doctors/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var doctor = await _context.Doctors
                .Include(d => d.Specialization)
                .FirstOrDefaultAsync(m => m.DoctorId == id);
            if (doctor == null)
            {
                return NotFound();
            }

            return View(doctor);
        }

        // GET: Doctors/Create
        public async Task<IActionResult> CreateAsync()
        {
            ViewData["Specializationid"] = new SelectList(_context.Specializations, "Id", "SpecializationName");
            ViewData["CountryModel"] = new SelectList(await this.GetCountry(), "name", "name");
            return View();
        }

        // POST: Doctors/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create( Doctor doctor)
        {
            
            
                _context.Add(doctor);
                await _context.SaveChangesAsync();
            ViewData["Specializationid"] = new SelectList(_context.Specializations, "Id", "SpecializationName");
            return RedirectToAction(nameof(Index));
            

        }

        // GET: Doctors/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }
            ViewData["SpecializationId"] = new SelectList(_context.Specializations, "Id", "SpecializationName", doctor.SpecializationId);
            return View(doctor);
        }

        // POST: Doctors/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,FirstName,LastName,Address,Notes,MonthlySalary,PhoneNumber,IBAN,Email,SpecializationId")] Doctor doctor)
        {
            if (id != doctor.DoctorId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(doctor);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DoctorExists(doctor.DoctorId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["SpecializationId"] = new SelectList(_context.Specializations, "Id", "Id", doctor.SpecializationId);
            return View(doctor);
        }

        // GET: Doctors/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var doctor = await _context.Doctors
                .Include(d => d.Specialization)
                .FirstOrDefaultAsync(m => m.DoctorId == id);
            if (doctor == null)
            {
                return NotFound();
            }

            return View(doctor);
        }

        // POST: Doctors/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            _context.Doctors.Remove(doctor);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DoctorExists(int id)
        {
            return _context.Doctors.Any(e => e.DoctorId == id);
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

