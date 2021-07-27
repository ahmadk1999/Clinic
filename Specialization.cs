using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Clinic.Models
{
    public class Specialization
    {
        [Key]
        [Required]
        public long Id { get; set; }
        [StringLength(50, ErrorMessage = "Maximum length is {1}")]
<<<<<<< HEAD

        [Required]
        [Display(Name = "specialization name")]
        
        [RegularExpression("^[A-Za-z]+$")]
=======
        [Display(Name = "Specialization Name")]
>>>>>>> 1e4981b7417a266729d67455bc456b21bcf0b1c0
        public string SpecializationName { get; set; }

        
    }
}
