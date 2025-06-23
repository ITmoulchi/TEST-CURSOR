import React from 'react';

export const metadata = { title: 'Organigramme' };

const organigrammeData = {
    directeur: {
        titre: 'Directeur de l\'Institut',
        description: 'National d\'Aménagement et d\'Urbanisme',
        nom: 'Mr Adil ZABADI',
    },
    subordonnes: [
        {
            titre: 'Secrétaire général',
            description: 'de l\'Institut National d\'Aménagement et d\'Urbanisme',
            nom: 'Mr Said EL AMAL',
        },
        {
            titre: 'Directeur adjoint',
            description: 'chargé des Études P.I',
            nom: 'Mr EL houssine NEJMI',
        },
        {
            titre: 'Directrice adjointe',
            description: 'chargée de la Formation Continue',
            nom: 'Mme Zakia MIHFAD',
        },
        {
            titre: 'Directrice adjointe',
            description: 'chargée de la Recherche scientifique',
            nom: 'Mme Sanaa NAKHLI',
        },
    ],
};

const Card = ({ titre, description, nom }: { titre: string, description: string, nom: string }) => (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center border-t-4 border-teal-500 w-60 mx-auto">
        <h4 className="font-bold text-gray-800 text-sm">{titre}</h4>
        <p className="text-xs text-gray-500 my-1 h-10">{description}</p>
        <hr className="my-2" />
        <p className="font-semibold text-teal-600">{nom}</p>
    </div>
);

const OrganigrammePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900">Organigramme</h1>
                <p className="mt-2 text-lg text-gray-600">Institut National d'Aménagement et d'Urbanisme</p>
            </div>

            <div className="flex flex-col items-center">
                {/* Director */}
                <Card {...organigrammeData.directeur} />
                
                {/* Vertical Line connecting to the horizontal line */}
                <div className="w-px h-8 bg-gray-400" />

                {/* Subordinates Grid */}
                <div className="w-full relative">
                    {/* The horizontal line */}
                    <div className="absolute top-0 left-0 right-0 w-11/12 md:w-3/4 h-px bg-gray-400 mx-auto" />

                    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {organigrammeData.subordonnes.map((person, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                {/* Vertical line from each card up to the horizontal line */}
                                <div className="absolute -top-8 w-px h-8 bg-gray-400" />
                                <Card {...person} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganigrammePage; 