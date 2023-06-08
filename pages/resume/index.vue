<script setup lang="ts">
import { Data } from "~/interfaces";
import json from "~/portfolio.json";

const data: Data = json;
useHead({
  title: `Resume | ${data.about.name} - ${data.about.role}`,
});
</script>

<template>
  <div class="vars">
    <div class="resume">
      <div class="resume__margin-bottom">
        <div class="resume__title">
          <i class="bi bi-bag-fill"></i>
          <h1>Experience</h1>
        </div>
        <div
          v-for="exp in data.resume?.experience"
          class="resume__experience-card"
        >
          <div class="resume__experience-card-date">
            <div>{{ exp.startAt }}</div>
            <div>{{ exp.endAt }}</div>
          </div>
          <div class="resume__experience-card-content">
            <h2 class="resume__experience-card-content-title">
              {{ exp.name }}
            </h2>
            <div>
              {{ exp.summary }}
            </div>
          </div>
        </div>
      </div>

      <div class="resume__margin-bottom">
        <div class="resume__title">
          <i class="bi bi-mortarboard-fill"></i>
          <h1>Education</h1>
        </div>
        <div
          v-for="education in data.resume?.education"
          class="resume__education-card"
        >
          <div class="resume__education-card-date">
            {{ education.year }}
          </div>
          <h2 class="resume__education-card-title">
            {{ education.name }}
          </h2>
        </div>
      </div>

      <div class="resume__margin-bottom">
        <div class="resume__title">
          <i class="bi bi-bullseye"></i>
          <h1>Skills</h1>
        </div>
        <div v-if="data.resume?.skill?.hard?.length" class="resume__skill-card">
          <div class="resume__skill-card-date">Hard Skills</div>
          <div class="resume__skill-card-label">
            <div v-for="hardSkill in data.resume.skill.hard">
              {{ hardSkill }}
            </div>
          </div>
        </div>
        <div v-if="data.resume?.skill?.soft?.length" class="resume__skill-card">
          <div class="resume__skill-card-date">Soft Skills</div>
          <div class="resume__skill-card-label">
            <div v-for="softSkill in data.resume.skill.soft">
              {{ softSkill }}
            </div>
          </div>
        </div>
        <div v-if="data.resume?.skill?.tech?.length" class="resume__skill-card">
          <div class="resume__skill-card-date">Technical Skills</div>
          <div class="resume__skill-card-label">
            <div v-for="techSkill in data.resume.skill.tech">
              {{ techSkill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vars {
  --resume__margin: 24px 10% 0 10%;
  --resume__margin-bottom: 48px;
  --resume__title-font-size: 24px;
  --resume__title-margin-bottom: 24px;
}

@media only screen and (max-width: 768px) {
  .vars {
    --resume__margin: 0 16px 0 16px;
    --resume__margin-bottom: 28px;
    --resume__title-font-size: 18px;
    --resume__title-margin-bottom: 12px;
  }
}

.resume {
  margin: var(--resume__margin);
}

.resume__margin-bottom {
  margin-bottom: var(--resume__margin-bottom);
}

.resume__title {
  display: flex;
  align-items: center;
  margin-bottom: var(--resume__title-margin-bottom);
}
.resume__title h1 {
  font-size: var(--resume__title-font-size);
}
.resume__title i {
  margin-right: 16px;
  font-size: var(--resume__title-font-size);
}

.resume__experience-card {
  display: flex;
  margin-bottom: 32px;
}
.resume__experience-card-date {
  display: flex;
  flex-direction: column;
  min-width: 160px;
  font-weight: 700;
  color: var(--resume__experience-date-text-color);
}
.resume__experience-card-content {
  width: 100%;
}
.resume__experience-card-content-title {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--resume__experience-title-text-color);
}

.resume__education-card {
  display: flex;
  margin-bottom: 16px;
}
.resume__education-card-date {
  display: flex;
  flex-direction: column;
  min-width: 160px;
  font-weight: 700;
  color: var(--resume__experience-date-text-color);
}
.resume__education-card-title {
  font-size: 16px;
  margin: 0;
}

.resume__skill-card {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.resume__skill-card-date {
  display: flex;
  flex-direction: column;
  min-width: 160px;
  font-weight: 700;
  color: var(--resume__experience-date-text-color);
}
.resume__skill-card-label {
  display: flex;
  overflow-x: auto;
}
.resume__skill-card-label div {
  margin-right: 8px;
  border-radius: 16px;
  background: var(--resume__skill-label-background-color);
  color: var(--resume__skill-label-text-color);
  padding: 4px 8px;
  font-weight: 700;
  white-space: nowrap;
}

@media only screen and (max-width: 768px) {
  .resume__experience-card {
    flex-direction: column;
  }
  .resume__experience-card-date {
    min-width: unset;
    flex-direction: row;
  }
  .resume__experience-card-date div {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .resume__education-card {
    flex-direction: column;
  }
  .resume__education-card-date {
    min-width: unset;
    flex-direction: row;
  }
  .resume__education-card-date div {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .resume__skill-card {
    flex-direction: column;
    align-items: unset;
  }
  .resume__skill-card-date {
    min-width: unset;
    flex-direction: row;
  }
  .resume__skill-card-label {
    padding-bottom: 10px;
  }
}
</style>
