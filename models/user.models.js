const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definir el esquema del perfil de usuario
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  userMail: {
    type: String,
    required: [true, "El correo es obligatorio"],
    validate: {
      validator: correo => /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(correo),
      message: props => `${props.value} no es un correo electrónico válido`
    }
  },
  userPassword: {
    type: String,
    required: [true, "La clave es obligatoria"],
    minlength: [6, "La clave debe tener al menos 6 caracteres"]
  }
}, { timestamps: true });

// Gancho de pre-guardado para hashear la clave secreta
UserSchema.pre('save', async function(next) {
  if (this.isModified('userPassword')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.userPassword = await bcrypt.hash(this.userPassword, salt);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema)

module.exports = User;
