import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/api/producto'; // URL de tu API en Express

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  obtenerProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}


/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private xmlUrl = 'http://localhost/phpmyadmin/index.php?route=/database/structure&db=productos';// direccion de la bd http://localhost/phpmyadmin/index.php?route=/database/structure&db=productos

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check the platform
  ) {}
  obttenerProductos(){
    return this.http.get(this.apiUrl);
  }

  obtenerProductos(): Observable<any[]> {
    return this.http.get(this.xmlUrl, { responseType: 'text' }).pipe(
      map((xml) => {
        if (isPlatformBrowser(this.platformId)) { 
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xml, 'text/xml');
          const productos = Array.from(xmlDoc.querySelectorAll('producto')).map((prod) => ({
            id: prod.getElementsByTagName('id')[0]?.textContent ?? 'Desconocido',
            nombre: prod.getElementsByTagName('nombre')[0]?.textContent ?? 'Sin nombre',
            precioP: prod.getElementsByTagName('precio')[0]?.textContent ?? '0', // Si no tiene precio, usa 0 por defecto
            cantidad: prod.getElementsByTagName('cantidad')[0]?.textContent ?? '0', // Si no tiene cantidad, usa 0 por defecto
            imagen: prod.getElementsByTagName('imagen')[0]?.textContent ?? 'sin_imagen.jpg' // Si no tiene imagen, usa una imagen por defecto
          }));
          
          return productos;
        }
        return []; 
      })
    );
  }
}*/
