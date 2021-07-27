using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Clinic.Models
{
    public class MedicalHistory
    {
        [Key]
        [Required]
        public long Id { get; set; }
        [StringLength(50, ErrorMessage = "Maximum length is {1}")]
        public string Description { get; set; }
<<<<<<< HEAD
        public int PatientId { get; set; }
=======
        [Display(Name = "Patient")]
        public long PatientId { get; set; }
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        [ForeignKey("PatientId")]
        public Patient Patient { get; set; }
    }
}
