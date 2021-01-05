package com.renan.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renan.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
