import { db } from '../src/lib/server/db/index.js';
import { auth } from '../src/lib/server/auth.js';

async function createAdmin() {
    console.log("⏳ Création de l'administrateur de test...");
    
    try {
        const user = await auth.api.signUpEmail({
            body: {
                email: "admin@defis-asso.fr",
                password: "password123",
                name: "Frédéric Admin",
            }
        });
        console.log("✅ Administrateur créé avec succès :", user.user.email);
    } catch (error) {
        console.error("❌ Erreur lors de la création :", error);
    }
    process.exit();
}

createAdmin();
