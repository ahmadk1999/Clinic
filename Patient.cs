using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Clinic.Models
{
    public class Patient
    {
        [Display(Name ="Patient ID")]
        [Key]
        [Required]
        [Range(10000,99999,ErrorMessage ="please enter a valid ID")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int patientId { get; set; }



        [StringLength(50, ErrorMessage = "Maximum length is {1}")]
        [RegularExpression("^[A-Za-z]+$")]
        [Required (ErrorMessage ="please provide your First name")]
        public string FirstName { get; set; }



        [StringLength(50, ErrorMessage = "Maximum length is {1}")]
        [RegularExpression("^[A-Za-z]+$")]
        [Required(ErrorMessage = "please provide your Last name")]
        public string LastName { get; set; }



        [DataType(DataType.Date)]
        public DateTime? Birthday { get; set; }



        public string Gender { get; set; }



        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }




        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }




        [StringLength(100, ErrorMessage = "Maximum length is {1}")]
        public string Address { get; set; }




        [DataType(DataType.DateTime)]
        public DateTime? RegisterationDate { get; set; }



        [RegularExpression("^\\d{9}$")]
        public string SSN { get; set; }



        public List<Appointment> Appointments { get; set; }
        public List<MedicalHistory> MedicalHistories { get; set; }
<<<<<<< HEAD
        public string Country { get; set; }
=======
        [NotMapped]
        public string PatientName
        {
            get { return $"{FirstName} {LastName}"; }

        }
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
    }
}
