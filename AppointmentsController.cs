using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Clinic.Data;
using Clinic.Models;

namespace Clinic.Controllers
{
    public class AppointmentsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AppointmentsController(ApplicationDbContext context)
        {
            _context = context;
        }

<<<<<<< HEAD
        public async Task<IActionResult> Index1Async(String search)
        {
            List<Appointment> listspec = _context.Appointments.ToList();
            listspec = _context.Appointments.Where(x => x.Patient.FirstName == search || search == null).ToList();
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentType, "Id", "Type");
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "DoctorId", "FirstName");
            ViewData["PatientId"] = new SelectList(_context.Patients, "patientId", "FirstName");
            return View(listspec);

            

        }
        // GET: Appointments
        public async Task<IActionResult> Index(String search)
        {


=======
        // GET: Appointments
        public async Task<IActionResult> Index()
        {
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
            var applicationDbContext = _context.Appointments.Include(a => a.AppointmentType).Include(a => a.Doctor).Include(a => a.Patient);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Appointments/Details/5
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var appointment = await _context.Appointments
<<<<<<< HEAD
                .Include(a => a.Doctor)
                .Include(a => a.Patient)
                .FirstOrDefaultAsync(m => m.appoitmentId == id);
=======
                .Include(a => a.AppointmentType)
                .Include(a => a.Doctor)
                .Include(a => a.Patient)
                .FirstOrDefaultAsync(m => m.Id == id);
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
            if (appointment == null)
            {
                return NotFound();
            }

            return View(appointment);
        }

        // GET: Appointments/Create
        public IActionResult Create()
        {
<<<<<<< HEAD
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentType, "Id", "Type");
            
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "DoctorId", "FirstName");
            ViewData["PatientId"] = new SelectList(_context.Patients, "patientId", "FirstName");
=======
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentTypes, "Id", "Type");
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "Id", "DoctorName");
            ViewData["PatientId"] = new SelectList(_context.Patients, "Id", "PatientName");
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
            return View();
        }

        // POST: Appointments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
<<<<<<< HEAD
        public async Task<IActionResult> Create( Appointment appointment)
        {


                _context.Add(appointment);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));

            
=======
        public async Task<IActionResult> Create([Bind("Id,DoctorId,PatientId,Reservation,AppointmentId")] Appointment appointment)
        {
            if (ModelState.IsValid)
            {
                _context.Add(appointment);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentTypes, "Id", "Type", appointment.AppointmentId);
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "Id", "DoctorName", appointment.DoctorId);
            ViewData["PatientId"] = new SelectList(_context.Patients, "Id", "PatientName", appointment.PatientId);
            return View(appointment);
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        }

        // GET: Appointments/Edit/5
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound();
            }
<<<<<<< HEAD
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentType, "Id", "Type");
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "DoctorId", "FirstName", appointment.DoctorId);
            ViewData["PatientId"] = new SelectList(_context.Patients, "patientId", "FirstName", appointment.PatientId);
=======
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentTypes, "Id", "Type", appointment.AppointmentId);
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "Id", "DoctorName", appointment.DoctorId);
            ViewData["PatientId"] = new SelectList(_context.Patients, "Id", "PatientName", appointment.PatientId);
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
            return View(appointment);
        }

        // POST: Appointments/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
<<<<<<< HEAD
        public async Task<IActionResult> Edit(long id,  Appointment appointment)
        {
            

           
            
               
               
                    _context.Update(appointment);
                    await _context.SaveChangesAsync();
                
                
               
            
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentType, "Id", "Type");
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "DoctorId", "FirstName", appointment.DoctorId);
            ViewData["PatientId"] = new SelectList(_context.Patients, "patientId", "FirstName", appointment.PatientId);
             return RedirectToAction(nameof(Index));
=======
        public async Task<IActionResult> Edit(long id, [Bind("Id,DoctorId,PatientId,Reservation,AppointmentId")] Appointment appointment)
        {
            if (id != appointment.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(appointment);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AppointmentExists(appointment.Id))
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
            ViewData["AppointmentId"] = new SelectList(_context.AppointmentTypes, "Id", "Type", appointment.AppointmentId);
            ViewData["DoctorId"] = new SelectList(_context.Doctors, "Id", "DoctorName", appointment.DoctorId);
            ViewData["PatientId"] = new SelectList(_context.Patients, "Id", "PatientName", appointment.PatientId);
            return View(appointment);
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        }

        // GET: Appointments/Delete/5
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var appointment = await _context.Appointments
<<<<<<< HEAD
                .Include(a => a.Doctor)
                .Include(a => a.Patient)
                .FirstOrDefaultAsync(m => m.appoitmentId == id);
=======
                .Include(a => a.AppointmentType)
                .Include(a => a.Doctor)
                .Include(a => a.Patient)
                .FirstOrDefaultAsync(m => m.Id == id);
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
            if (appointment == null)
            {
                return NotFound();
            }

            return View(appointment);
        }

        // POST: Appointments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            _context.Appointments.Remove(appointment);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AppointmentExists(long id)
        {
<<<<<<< HEAD
            return _context.Appointments.Any(e => e.appoitmentId == id);
=======
            return _context.Appointments.Any(e => e.Id == id);
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        }
    }
}
