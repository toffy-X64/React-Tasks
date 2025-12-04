// ============================================
// МАСИВ ДЛЯ ЗАВДАННЯ 1: Features (Можливості продукту)
// ============================================

const features = [
  {
    id: 1,
    title: "Блискавична синхронізація",
    description: "Миттєва синхронізація файлів розміром до 5GB. Технологія дельта-синхронізації передає лише змінені частини."
  },
  {
    id: 2,
    title: "256-бітне шифрування",
    description: "Військового рівня безпека з end-to-end шифруванням. Ваші дані захищені на всіх етапах."
  },
  {
    id: 3,
    title: "Командна робота",
    description: "Гнучке управління правами доступу, спільне редагування та коментарі в реальному часі."
  },
  {
    id: 4,
    title: "99.9% Uptime",
    description: "Гарантована доступність сервісу. Розподілена інфраструктура в 12 дата-центрах по всьому світу."
  }
];


// ============================================
// МАСИВ ДЛЯ ЗАВДАННЯ 2: Teams (Команди)
// ============================================

const teams = [
  {
    id: 1,
    name: "Frontend Team",
    description: "Команда розробки користувацьких інтерфейсів",
    color: "blue",
    members: [
      {
        id: 1,
        name: "Олена Коваленко",
        role: "Senior Frontend Developer",
        avatar: "ОК",
        skills: ["React", "TypeScript", "Next.js", "Tailwind"]
      },
      {
        id: 2,
        name: "Дмитро Шевченко",
        role: "Frontend Developer",
        avatar: "ДШ",
        skills: ["Vue.js", "JavaScript", "CSS", "Figma"]
      },
      {
        id: 3,
        name: "Анна Мельник",
        role: "UI/UX Designer",
        avatar: "АМ",
        skills: ["Design", "Prototyping", "User Research"]
      }
    ]
  },
  {
    id: 2,
    name: "Backend Team",
    description: "Команда серверної розробки та інфраструктури",
    color: "purple",
    members: [
      {
        id: 4,
        name: "Іван Петренко",
        role: "Lead Backend Developer",
        avatar: "ІП",
        skills: ["Node.js", "PostgreSQL", "Docker", "AWS"]
      },
      {
        id: 5,
        name: "Софія Бойко",
        role: "Backend Developer",
        avatar: "СБ",
        skills: ["Python", "Django", "Redis", "MongoDB"]
      },
      {
        id: 6,
        name: "Максим Ткаченко",
        role: "DevOps Engineer",
        avatar: "МТ",
        skills: ["Kubernetes", "CI/CD", "Terraform", "Linux"]
      }
    ]
  },
  {
    id: 3,
    name: "Design Team",
    description: "Команда дизайну та креативу",
    color: "green",
    members: [
      {
        id: 7,
        name: "Марія Кравченко",
        role: "Lead Designer",
        avatar: "МК",
        skills: ["UI Design", "Brand Identity", "Illustration"]
      },
      {
        id: 8,
        name: "Артем Лисенко",
        role: "Motion Designer",
        avatar: "АЛ",
        skills: ["After Effects", "Animation", "3D"]
      },
      {
        id: 9,
        name: "Катерина Волошин",
        role: "UX Researcher",
        avatar: "КВ",
        skills: ["User Testing", "Analytics", "Research"]
      }
    ]
  },
  {
    id: 4,
    name: "Management",
    description: "Команда управління та стратегії",
    color: "orange",
    members: [
      {
        id: 10,
        name: "Віктор Сидоренко",
        role: "Project Manager",
        avatar: "ВС",
        skills: ["Agile", "Scrum", "Leadership", "Planning"]
      },
      {
        id: 11,
        name: "Юлія Романенко",
        role: "Product Owner",
        avatar: "ЮР",
        skills: ["Strategy", "Roadmap", "Stakeholders"]
      },
      {
        id: 12,
        name: "Олександр Гриценко",
        role: "Tech Lead",
        avatar: "ОГ",
        skills: ["Architecture", "Mentoring", "Code Review"]
      }
    ]
  }
];


// ============================================
// ПРИКЛАД ВИКОРИСТАННЯ В КОМПОНЕНТАХ
// ============================================

// Для Features:
// {features.map(feature => (
//   <Feature
//     key={feature.id}
//     title={feature.title}
//     description={feature.description}
//   />
// ))}

// Для Teams:
// {teams.map(team => (
//   <Team
//     key={team.id}
//     name={team.name}
//     description={team.description}
//     color={team.color}
//   >
//     {team.members.map(member => (
//       <Member
//         key={member.id}
//         name={member.name}
//         role={member.role}
//         avatar={member.avatar}
//         skills={member.skills}
//       />
//     ))}
//   </Team>
// ))}


// ============================================
// ЕКСПОРТ (якщо використовуєте модулі)
// ============================================

export { features, teams };