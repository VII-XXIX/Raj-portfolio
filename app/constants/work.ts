import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021-2022',
    title: 'Independent Tech Learning',
    subtitle: 'Software Development Enthusiast',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -5),
    year: '2022-2023',
    title: 'Self Learning & Product Development',
    subtitle: 'UI/UX Designer & Frontend Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -10),
    year: '2023-Present',
    title: 'Freelance & SaaS Development',
    subtitle: 'Full Stack Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -15),
    year: '2024-Present',
    title: 'Hospital IT Department',
    subtitle: 'IT Executive',
    position: 'right',
  }
]