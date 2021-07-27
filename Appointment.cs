using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Clinic.Models
{
    public class Appointment
    {
        [Key]
        [Required]
        [Range(1000,9999,ErrorMessage ="please enter a valid appoitment ID")]
        public long appoitmentId { get; set; }



        [Required]
<<<<<<< HEAD
        public int DoctorId { get; set; }
=======
        [Display(Name = "Doctor")]
        public long DoctorId { get; set; }
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        [ForeignKey("DoctorId")]



        public Doctor Doctor { get; set; }


        [Required]
<<<<<<< HEAD
        public int PatientId { get; set; }
=======
        [Display(Name = "Patient")]
        public long PatientId { get; set; }
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        [ForeignKey("PatientId")]



        public Patient Patient { get; set; }
        [DataType(DataType.DateTime)]



        public DateTime Reservation { get; set; }
<<<<<<< HEAD


=======
        [Display(Name = "Appointment Type")]
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        public long AppointmentId { get; set; }
        [ForeignKey("AppointmentId")]
        public AppointmentType AppointmentType { get; set; }
    }
}
